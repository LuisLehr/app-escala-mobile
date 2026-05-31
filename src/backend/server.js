const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Criação da pool de conexões
const db = mysql.createPool({
    host: 'db4free.net',
    user: 'schedules_prof',
    password: 'development',
    database: 'schedules_prof',
    connectionLimit: 10 // Define o número máximo de conexões na pool
});

// Endpoint para os nomes E ids dos professores
app.get('/professores', (req, res) => {
    const query = `
        SELECT p.professor_id, p.nome
        FROM PROFESSORES p;
    `;

    db.query(query, (err, result) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            return res.status(500).json({ error: 'Erro ao buscar os professores' });
        }
        console.log('Resultado da consulta:', result);
        res.status(200).json(result); // Agora você retorna o ID e o nome
    });
});


// Endpoint para buscar a escala de um professor específico
app.get('/escala/:professor_id', (req, res) => {
    const { professor_id } = req.params; // Pega o professor_id da URL
    console.log('Professor ID recebido:', professor_id); // Debug

    // Consulta SQL para buscar a escala do professor
    const query = `
        SELECT h.segunda, h.terca, h.quarta, h.quinta, h.sexta
        FROM HORARIOS h
        WHERE h.professor_id = ?;
    `;

    db.query(query, [professor_id], (err, result) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            return res.status(500).json({ error: 'Erro ao buscar a escala do professor' });
        }

        console.log('Resultado da consulta:', result); // Debug

        if (result.length === 0) {
            return res.status(404).json({ error: 'Professor não encontrado ou sem horários cadastrados' });
        }

        res.status(200).json(result[0]); // Retorna a escala do professor
    });
});

// Endpoint para atribuir um professor disponível para aplicar a prova
app.post('/atribuir-professor', (req, res) => {
    const { dia, horarios } = req.body; // Recebe o dia e os horários (array) enviados pelo frontend

    // Define o campo do dia da semana a ser consultado
    const diaDaSemanaMap = {
        'segunda': 'h.segunda',
        'terca': 'h.terca',
        'quarta': 'h.quarta',
        'quinta': 'h.quinta',
        'sexta': 'h.sexta'
    };

    const diaColuna = diaDaSemanaMap[dia];

    if (!diaColuna) {
        return res.status(400).json({ error: 'Dia inválido' });
    }

    // Consulta SQL para verificar qual professor está disponível nos horários escolhidos
    const query = `
        SELECT p.professor_id, p.nome
        FROM HORARIOS h
        JOIN PROFESSORES p ON h.professor_id = p.professor_id
        WHERE ${diaColuna} = 1 AND h.horario IN (?)
        GROUP BY p.professor_id, p.nome
        HAVING COUNT(*) = ?
        LIMIT 1
    `;

    // O número de horários no array
    const numHorarios = horarios.length;

    db.query(query, [horarios, numHorarios], (err, result) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            return res.status(500).json({ error: 'Erro ao buscar o professor disponível' });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: 'Nenhum professor disponível para os horários selecionados' });
        }

        const professorDisponivel = {
            id: result[0].professor_id,
            nome: result[0].nome
        };
        res.status(200).json({ professor: professorDisponivel });        
    });
});

// Inicia o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor backend rodando na porta ${PORT}`);
});

// Encerrar a pool de conexões ao sair
process.on('SIGINT', () => {
    db.end((err) => {
        if (err) {
            console.error('Erro ao encerrar a conexão ao banco de dados:', err);
        } else {
            console.log('Conexões da pool encerradas.');
        }
        process.exit();
    });
});
