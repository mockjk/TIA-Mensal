import {wordDB, mostProbablyQuestion, disposableDB} from './can-i-answer.js'


let question = "Qual o nome do fundador da instituição? Quem era ele?".toLowerCase().split(" ") 
question = question[question.length -1] === "?" ? question.slice(0, -1) : question

for (let i = 0; i < question.length; ++i) {
    for (let j = 0; j < wordDB.length; ++j) {
        if (wordDB[j].probablyWords.indexOf(question[i]) !== -1) {
            wordDB[j].matched++
        }
    }
}

console.log(mostProbablyQuestion())

//Nosso grupo decidiu escolher que quando tiver que retornar o banco de palavras que não tem coerência com o assunto, fizemos uma condicional que compara todos os bancos e caso o banco for >= tensionava o banco de palavras sem coerência