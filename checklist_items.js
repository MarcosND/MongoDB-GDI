// 1. USE -> Usado para determinar qual banco de dados será usado ✔️
// 2. FIND -> Usado para consultar o banco de dados ✔️
// 3. SIZE -> Serve como operador de consulta no array retorna todos os objetos com aquele número especificado em seu array ✔️
// 4. AGGREGATE -> Serve para agregar dados permitindo a manipulação a partir disso ✔️
// 5. MATCH -> Usado no aggregate para filtrar de acordo com as condições que serao passadas ✔️
// 6. PROJECT -> Usado para especificar que campos aparecerão ou não na agregação ✔️
// 7. GTE -> Operador de maior ou igual que, usado em comparações ✔️
// 8. GROUP -> Agrupa os objetos de acordo com o que foi passado no campo _id ✔️
// 9. SUM -> Calcula e retorna a soma dos valores numericos numa agregação ✔️
// 10. COUNT -> Retorna o numero de documentos que passam na condição especificada ✔️
// 11. MAX -> Retorna a maior ocorrencia do campo especificado ✔️
// 12. AVG -> Retorna a média das ocorrencias do campo especificado ✔️
// 13. EXISTS -> Retorna os objetos em um find que tem aquele campo se for true e os que não tem se for false ✔️
// 14. SORT -> Ordena em ordem crescente se for 1 e decrescente se for -1 ✔️
// 15. LIMIT -> Limita a quantidade de resultados para o valor especificado ✔️
// 16. $WHERE -> Permite maior flexibilidade nas consultas, utilizando funções JS ✔️
// 17. MAPREDUCE -> Outra forma de agregação, que permite a junção e redução de valores em um só ✔️
// 18. FUNCTION -> Função Javascript ✔️
// 19. PRETTY -> Usado para formatar os dados retornados ✔️
// 20. ALL -> Retorna todos os documentos que o array contem todos os elementos passados ✔️
// 21. SET -> Setar campo especifico do documento para novo valor ✔️
// 22. TEXT -> Utilizado para permitir pesquisas atraves de texto ✔️
// 23. SEARCH -> Utilizado para especificar qual pesquisa sera feita ✔️
// 24. FILTER -> Filtra o array, so retornando um subset dele dependnedo da funcao passada ✔️
// 25. UPDATE -> Utilizado para atualizar um documento ✔️
// 26. SAVE -> Usado para atualizar ou salvar um novo documento ✔️
// 27. RENAMECOLLECTION -> Utilizado para renomear uma coleção ✔️
// 28. COND -> Especifica uma condição dentro de uma agregação ✔️
// 29. LOOKUP -> Forma de juntar duas coleções caso tenham um campo igual ✔️
// 30. FINDONE -> Retorna apenas um documento que satisfaz a consulta realizada ✔️
// 31. ADDTOSET -> Adiciona um valor novo no array caso ele ainda nao esteja ✔️

// Selecionando a database "Hospital"
// Para utilizar o use basta fazer use NomeDoBanco. Ex: use Hospital

// Utilizando find para encontrar as informações do hospital com nome Santa Joana
db.hospital.find({"nome": "Santa Joana"})

// Retornando todos os hospitals que tem 2 médicos em seu array
db.hospital.find({medicos: {$size: 2}})

// Agregando os dados sem nenhuma especificação, teremos todos os hospitais como retorno
db.hospital.aggregate()

// Usando novamente o agregate, dessa vez usando match para filtrar e retornar apenas os hospitais com especializacao de radiografia

db.hospital.aggregate([{$match: {especializacao: "Radiografia" }}])

// Dessa vez tambem utilizando o project para filtrar, e mostrar apenas o campo nome
db.hospital.aggregate([{$match: {
    especializacao: "Radiografia"
}},
{$project: {
    "_id": 0,
    "nome": 1
}}])

// Consultando a tabelas de consultas e retornando todos que tem a idade maior que 50
db.consultas.find({"idade": {$gte: 50}})

//Agrupando os hospitais por especializacao
db.hospital.aggregate([{$group: {
    _id: "$especializacao"
}}])

// Agrupando os hospitais por especializacao e então retornando também o campo qtd_medicos que retorna a soma dos medicos que foram agrupados para cada agrupamento
db.hospital.aggregate([{$group: {
    _id: "$especializacao",
    qtd_medicos: {
        $sum: {$size: "$medicos"}
    }
},
}])

// Retorna a quantidade de consultas feitas no hospital Santa Joana
db.consultas.count({"hospital": "Santa Joana"})

//Agrupando as consultas por hospital e então retornando a maior idade de paciente registrada em cada agrupamento
db.consultas.aggregate([
    {
        $group: {
            _id: "$hospital",
            idade_max: {$max: "$idade"}
                }
    }])

// Agrupando as consultas por hospital e então retornando o valor medio da idade dos pacientes em cada agrupamento
db.consultas.aggregate([
{
    $group: {
        _id: "$hospital",
        media_idade: {$avg: "$idade"}
            }
}])

// Retorna todos os hospitais que tem o campo medicos
db.hospital.find({medicos: {$exists: true}})

// Agrupando todos os hospitais por especialização e então ordenando os ids em ordem crescente
db.hospital.aggregate([{$group: {
    _id: "$especializacao"
}}, 
{ 
    $sort: {"_id": 1}
}])

// Pegando todas as consultas mas limitando para 3 resultados
db.consultas.find().limit(3)

// Pegando apenas os hospitais especializados em Radiografia utilizando uma funcao JS
db.hospital.find({
    $where:
    function() {
        return ((this.especializacao) == "Radiografia")
    }
})

// Reduz os objetos com campo especialação em apenas um e junta seus medicos

db.hospital.mapReduce(
    function () { emit (this.especializacao, this.medicos)},
    function(key, values){return Array.concat(values)},
    { 
        query: { especializacao: "Radiografia" },
        out: "ResultadoReduce"}
)

db.Resultado.find()

// Consulta a coleção de consultas formadando os dados com pretty
db.consultas.find().pretty()

// Retorna todos os hospitais que tem Paulo Soares e Jorge jesus como medicos
db.hospital.find({medicos: {$all: ["Paulo Soares", "Jorge Jesus"]}})

// Utilizando o update para atualizar o hospital com nome Albert Einsten, modificando seu numero de endereço pra 303
db.hospital.update({ nome: "Albert Einstein"},
 {$set: {"endereco.numero": 303} })


// Criando um index para permitir pesquisas de texto e então pesquisando por pacientes com o nome de cesar
db.consultas.createIndex({paciente: "text"})
db.consultas.find({$text: {$search: "Cesar"}}).pretty()


// So retorna o array de medicos que tiver 5 ou mais medicos
db.hospital.aggregate([
    {
        $project: {
        nome: 1,
        medicos: {
            $filter: {
                input: "$medicos",
                cond: { $gte: [{$size: "$medicos"}, 5]}
            }
    }}}])

// Utilizando save para inserir um novo hospital
db.hospital.save({      
    "nome": "Sirio Libanes",
    "endereco": {
        "rua": "Rua Dona Adma Jafet",
        "numero": 115,
        "complemento": "Ao lado do parque são jorge"
    },
    "medicos": ["Marcio Carvalho", "Claudia Soares", "Soares Filho", "Beltrão Melo"],
    "especializacao": "Clinico Geral"
})

// Renomeando a coleção para hospitais
db.hospital.renameCollection("hospitais")

// Definindo um campo novo chamando idoso para aqueles pacientes com idade maior que 60
db.consultas.aggregate([{
    $project: {
        paciente: 1,
        idoso: {
            $cond: { if: { $gte: ["$idade", 60]}, then: "true", else: "false"}
        }
    }
}])

// Adicionando o campo de qual hospital foi realizada a consulta onde esta o documento hospital, caso o campo hospital e nome sejam iguais
db.consultas.aggregate([{
    $lookup: {
        from: "hospitais",
        localField: "hospital",
        foreignField: "nome",
        as: "hospital_consultado"
    }
}])

// Realizando uma pesquisa em consultas que retornar apenas uma resposta, a paciente com nome Maria Claudia
db.consultas.findOne({"paciente": "Maria Claudia"})

//Adicionando mais um medico no array de medicos do hospital davila
db.hospitais.updateOne({"nome": "D'avila"}, { $addToSet: {medicos: "Marcio Freire"}})