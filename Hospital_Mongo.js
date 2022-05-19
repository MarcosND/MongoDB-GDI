db.createCollection("hospital")
db.createCollection("consultas")

// Povoando a coleção de hospitais
db.hospital.insertMany([
    {      
        "nome": "Santa Joana",
        "endereco": {
            "rua": "Rua padre sao Jorge",
            "numero": 200,
            "complemento": "Ao lado da igreja são joao"
        },
        "medicos": ["Sir Jaime", "Claudia Soares", "Bravo Maximus", "Joana Bezerra"],
        "especializacao": "Radiografia"
    },
    {      
        "nome": "Ronilson limas",
        "endereco": {
            "rua": "Rua Edicao limitada",
            "numero": 451,
            "complemento": "Ao lado da igreja"
        },
        "medicos": ["Regina Caze", "Motivacao agregado", "Claudio Pereira"],
        "especializacao": "Clinica medica"
    },
    {      
        "nome": "Hospital Casa Forte",
        "endereco": {
            "rua": "Rua Casa Forte",
            "numero": 201,
            "complemento": "Ao lado da padaria delicias da praca"
        },
        "medicos": ["Cledina Maria", "Claudia Soares", "Felicidade pereira", "Maria bezerra", "Bacilo maximiliano"],
        "especializacao": "Oftalmologia"
    },
    {      
        "nome": "Geracao saude",
        "endereco": {
            "rua": "Rua acimania",
            "numero": 132,
            "complemento": "Acima da praca coracao"
        },
        "medicos": ["Hermiliano gomes", "Gabriel pereira", "Mariano dias", "Alicia maria", "Joana Carla", "Mariana do Carmo"],
        "especializacao": "Cirurgia geral"
    },
    {      
        "nome": "Graciliano ramos",
        "endereco": {
            "rua": "Rua Marconi Lafayette",
            "numero": 12,
            "complemento": "Ao lado do cemitério"
        },
        "medicos": ["Walter Lafayette", "Julia Leite", "Tulio Freitas", "Jamerson Bezerra"],
        "especializacao": "Cirurgia Plástica"
    },
    {      
        "nome": "Albert Einstein",
        "endereco": {
            "rua": "Rua jardim são paulo",
            "numero": 144,
            "complemento": "Por cima do bairro"
        },
        "medicos": ["Graça dias", "Gabriel Menino", "Jean Carlos", "Welker Marcal"],
        "especializacao": "Angiologia"
    },
    {      
        "nome": "Americo Pereira",
        "endereco": {
            "rua": "Rua Brasil de sobral",
            "numero": 124,
            "complemento": "Ao lado da padaria rodelas"
        },
        "medicos": ["Mario filho", "Ana Maria Sobral", "Tramontino dias", "Alana Cabral"],
        "especializacao": "Radiografia"
    },
    {      
        "nome": "Boa saude",
        "endereco": {
            "rua": "Rua Alvares Maria",
            "numero": 807,
            "complemento": "Na praca joan mar"
        },
        "medicos": ["Pomes filhos", "Lebrao jomes", "Junior Tavares", "Luis Phelippe"],
        "especializacao": "Gastroentreologia"
    },
    {      
        "nome": "D'avila",
        "endereco": {
            "rua": "Rua Maria Carla",
            "numero": 111,
            "complemento": "Acima do supermercado bompreco"
        },
        "medicos": ["Paulo Soares", "Jorge Jesus"],
        "especializacao": "Dermatologia"
    }
]);

// Povoando a coleção de consultas
db.consultas.insertMany([
    {      
        "hospital": "Santa Joana",
        "paciente": "Cesar melo",
        "idade": 34,
        "medico": "Claudia Soares",
        "sintomas": ["Tosse", "dor de cabeca", "febre", "dor nos olhos"],
        "exames_realizados": [{
            "tipo": "hemograma",
            "indicativo": "colesterol alto",
            "data": "23/12/2022"
        },
        {
            "tipo": "papanicolau",
            "indicativo": "nenhum",
            "data": "20/05/2022"
        },
        {
            "tipo": "Covid",
            "indicativo": "Negativo",
            "data": "21/01/2021"
        }    
    ],
        "diagnostico": "Gripe grave"
    },
    {      
        "hospital": "Albert Einstein",
        "paciente": "Maria Claudia",
        "idade": 56,
        "medico": "Gabriel Menino",
        "sintomas": ["Desmaio", "dor de cabeca", "febre"],
        "exames_realizados": [{
            "tipo": "Exame de Colesterol",
            "indicativo": "colesterol alto",
            "data": "11/10/2019"
        },
        {
            "tipo": "mamografia",
            "indicativo": "nenhum",
            "data": "12/01/2022"
        },  
    ],
        "diagnostico": "Infarto devido a obstrução das veias"
    },
    {      
        "hospital": "Santa Joana",
        "paciente": "Joana Filha",
        "idade": 20,
        "medico": "Claudete Ramos",
        "sintomas": ["Tontura", "dor de cabeca", "febre", "dor nos olhos", "Coriza"],
        "exames_realizados": [{
            "tipo": "Teste de urina",
            "indicativo": "tudo nos conformes",
            "data": "12/04/2015"
        },
    ],
        "diagnostico": "Virose"
    },
    {      
        "hospital": "Hospital Casa Forte",
        "paciente": "Claudete Ramos",
        "idade": 45,
        "medico": "Cledina Maria",
        "sintomas": ["Dificuldade ao enxergar de longe", "dor nos olhos"],
        "exames_realizados": [{
            "tipo": "Exame de vista",
            "indicativo": "Regular",
            "data": "23/05/2012"
        },   
    ],
        "diagnostico": "Miopia"
    },
    {      
        "hospital": "Boa saude",
        "paciente": "Claudio Andre",
        "idade": 21,
        "medico": "Junior Tavares",
        "sintomas": ["Dor na regiao abdominal", "vomito", "febre"],
        "exames_realizados": [{
            "tipo": "pediatra",
            "indicativo": "glicose baixa",
            "data": "23/12/2022"
        },
        {
            "tipo": "Covid",
            "indicativo": "Positivo",
            "data": "21/01/2021"
        }    
    ],
        "diagnostico": "Gastroenteria"
    },
    {      
        "hospital": "D'Avila",
        "paciente": "Enzo Perez",
        "idade": 15,
        "medico": "Paulo Soares",
        "sintomas": ["Nada de anormal"],
        "exames_realizados": [{
            "tipo": "Exame de Sangue",
            "indicativo": "colesterol alto",
            "data": "22/09/2021"
        },
    ],
        "diagnostico": "Acne aguda"
    },
    {      
        "hospital": "Santa Joana",
        "paciente": "Yves Pomes",
        "idade": 78,
        "medico": "Sir Jaime",
        "sintomas": ["Dor no braço", "Dor na bacia"],
        "exames_realizados": [{
            "tipo": "hemograma",
            "indicativo": "Colesterol baixo",
            "data": "23/12/1988"
        },
        {
            "tipo": "Colonoscopia",
            "indicativo": "Cancer de prostata",
            "data": "10/01/2005"
        },
        {
            "tipo": "Gastroenterologia",
            "indicativo": "Gastrite",
            "data": "21/01/2009"
        },
        {
            "tipo": "Radiografia",
            "indicativo": "Cancer de pele",
            "data": "04/04/2004"
        }    
    ],
        "diagnostico": "Braço e bacia fraturados"
    },
]);