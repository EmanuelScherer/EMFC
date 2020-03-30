/**
 * Emanuel Master Functions Console (EMFC)
 * 
 * @author Emanuel de Souza Scherer
 * 
 * @module EMFC
 * 
 * @requires inquirer^7.0.6
 * @requires inquirer-table-prompt^0.2.1
 * @requires colors^1.4.0
*/
const colors = require('colors')
colors.enable()

const inquirer = require('inquirer');
inquirer.registerPrompt("table", require("inquirer-table-prompt"));

const emfc = module.exports = {

    /**
     * Printa uma mensagem no console com a cor verde (Utilizado para dizer tudo OK)
     * 
     * @example 
     * <caption>(Exemplo no console - Sem as cores, pois não podem ser colocadas na Documentação)</caption>
     * ===========================TITULO===========================
     *  TAG1: PRINT1
     *  TAG2: PRINT2
     * ===========================TITULO===========================
     * 
     * @example
     * <caption>Exemplo de uso - Gera o print acima ⇧</caption>
     * PrintOk('TITULO', [{tag:'TAG1', print: 'PRINT1'},
     *                    {tag:'TAG2', print: 'PRINT2'}])
     * 
     * @param {String} titulo - Titulo do print
     * @param {Array<{tag: 'TAG1', print: 'PRINT1'}, {tag: 'TAG2', print: 'PRINT2'}>} linhas - linhas do print
    */
    PrintOk: (titulo, linhas) => {

        let StringSep1 = "=".repeat(50-(titulo.length/2))

        if ((titulo.length/2)%2 != 0) {
            
            StringSep2 = "=".repeat(50-(titulo.length/2))+"=="
        
        }
        else {

            StringSep2 = "=".repeat(50-(titulo.length/2))

        }

        console.log(colors.green(StringSep1+titulo+StringSep2).bold)

        for (l in linhas) {

            console.log(colors.green(" "+linhas[l].tag.bold+": "+linhas[l].print))

        }

        console.log(colors.green(StringSep1+titulo+StringSep2).bold)

    },

    /**
     * Printa uma mensagem no console com a cor vermelha (Utilizado para informar erro)
     * 
     * @example 
     * <caption>(Exemplo no console - Sem as cores, pois não podem ser colocadas na Documentação)</caption>
     * ===========================TITULO===========================
     *  TAG1: PRINT1
     *  TAG2: PRINT2
     * ===========================TITULO===========================
     * 
     * @example
     * <caption>Exemplo de uso - Gera o print acima ⇧</caption>
     * PrintError('TITULO', [{tag:'TAG1', print: 'PRINT1'},
     *                    {tag:'TAG2', print: 'PRINT2'}])
     * 
     * @param {String} titulo - Titulo do print
     * @param {Array<{tag: 'TAG1', print: 'PRINT1'}>} linhas - linhas do print
    */
    PrintError: (titulo, linhas) => {

        let StringSep1 = "=".repeat(50-(titulo.length/2))

        if ((titulo.length/2)%2 != 0) {
            
            StringSep2 = "=".repeat(50-(titulo.length/2))+"=="
        
        }
        else {

            StringSep2 = "=".repeat(50-(titulo.length/2))

        }

        console.log(colors.red(StringSep1+titulo+StringSep2).bold)

        for (l in linhas) {

            console.log(colors.red(" "+linhas[l].tag.bold+": "+linhas[l].print))

        }

        console.log(colors.red(StringSep1+titulo+StringSep2).bold)

    },

    /**
     * Printa uma mensagem no console com cor customizavel
     * 
     * @example 
     * <caption>Exemplo no console - Sem as cores, pois não podem ser colocadas na Documentação</caption>
     * ===========================TITULO===========================
     *  TAG1: PRINT1
     *  TAG2: PRINT2
     * ===========================TITULO===========================
     * 
     * @example
     * <caption>Exemplo de uso - Gera o print acima ⇧</caption>
     * PrintCustom('TITULO', 'yellow', [{tag:'TAG1', print: 'PRINT1'},
     *                                  {tag:'TAG2', print: 'PRINT2'}])
     * 
     * @param {String} titulo - Titulo do print
     * @param {String} cor - Nome da cor, possiveis: [black, red, green, yellow, blue, magenta, cyan, white, gray, grey, rainbow, zebra, america, trap, random]
     * @param {Array<{tag: 'TAG1', print: 'PRINT1'}>} linhas - linhas do print
    */
    PrintCustom: (titulo, cor, linhas) => {

        let StringSep1 = "=".repeat(50-(titulo.length/2))

        if ((titulo.length/2)%2 != 0) {
            
            StringSep2 = "=".repeat(50-(titulo.length/2))+"=="
        
        }
        else {

            StringSep2 = "=".repeat(50-(titulo.length/2))

        }

        console.log(colors[cor](StringSep1+titulo+StringSep2).bold)

        for (l in linhas) {

            console.log(colors[cor](colors.bold(" "+linhas[l].tag)+": "+linhas[l].print))

        }

        console.log(colors[cor](StringSep1+titulo+StringSep2).bold)

    },

    /**
     * Printa uma mensagem simples no console na cor branca
     * 
     * @example 
     * <caption>(Exemplo no console - Sem as cores, pois não podem ser colocadas na Documentação)</caption>
     * ===========================TITULO===========================
     *  TAG1: PRINT1
     *  TAG2: PRINT2
     * ===========================TITULO===========================
     * 
     * @example
     * <caption>Exemplo de uso - Gera o print acima ⇧</caption>
     * Print('TITULO', [{tag:'TAG1', print: 'PRINT1'},
     *                  {tag:'TAG2', print: 'PRINT2'}])
     * 
     * @param {String} titulo - Titulo do print
     * @param {Array<{tag: 'TAG1', print: 'PRINT1'}>} linhas - linhas do print
    */
    Print: (titulo, linhas) => {

        let StringSep1 = "=".repeat(50-(titulo.length/2))

        if ((titulo.length/2)%2 != 0) {
            
            StringSep2 = "=".repeat(50-(titulo.length/2))+"=="
        
        }
        else {

            StringSep2 = "=".repeat(50-(titulo.length/2))

        }

        console.log(colors.white(StringSep1+titulo+StringSep2).bold)

        for (l in linhas) {

            console.log(colors.white(" "+linhas[l].tag.bold+": "+linhas[l].print))

        }

        console.log(colors.white(StringSep1+titulo+StringSep2).bold)

    },

    /**
     * Pega um input do tipo lista de seleção do console (seleção é feita pelas 'setinhas', enter da ok)
     * 
     * @returns {Promise<String>} Retona uma promessa com a escolha do usuario
     * 
     * @param {String} mensagem - Mensagem que ira aparecer no console
     * @param {Array<String>} escolhas - Opções para selecionar no console
     * 
     * @example 
     * <caption>Exemplo no console - Sem as cores, pois não podem ser colocadas na Documentação</caption>
     * ? Mensagem 
     * ❯ A 
     *   B 
     *   C 
     * 
     * @example
     * <caption>Exemplo de retono </caption>
     * A (Se for escolido A) | B (Se for escolido B) | C (Se for escolido C)
     * 
     * @example
     * <caption>Exemplo de uso - Gera a seleção acima ⇧</caption>
     * InputList('Mensagem', ['A', 'B', 'C']).then(r => {
     * 
     *  //SEU CODIGO -> r representa o retorno
     * 
     * })
    */
    InputList: async (mensagem, escolhas) => {

        return new Promise(async (resolve) => {

            await inquirer.prompt([{

                type: 'list',
                name: 'a',
                message: mensagem,
                choices: escolhas

            }])
            .then(escolha => {

                resolve(escolha.a)
                
            })
            .catch(error => {
                if (error.isTtyError) {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Não foi possivel mostrar a seleção no console'}, 
                                            {tag: 'Onde', print: 'InputList('+mensagem+', '+JSON.stringify(escolhas)+')'}])

                }
                else {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Deu muito erro'}, 
                                            {tag: 'Onde', print: 'InputList('+mensagem+', '+JSON.stringify(escolhas)+')'},
                                            {tag: 'Out', print: error}])
                    
                }
            });

        })

    },
    
    /**
     * Pega um input do tipo rawlist de seleção do console (seleção é feita pelas 'setinhas' ou pelo numero da escolha, enter da ok)
     * 
     * @returns {Promise<String>} Retona uma promessa com a escolha do usuario
     * 
     * @param {String} mensagem - Mensagem que ira aparecer no console
     * @param {Array<String>} escolhas - Opções para selecionar no console
     * 
     * @example 
     * <caption>Exemplo no console - Sem as cores, pois não podem ser colocadas na Documentação</caption>
     *  ? Mensagem 
     *    1) A
     *    2) B
     *    3) C
     *    Answer: 1
     * 
     * @example
     * <caption>Exemplo de retono </caption>
     * A (Se for escolido A (1)) | B (Se for escolido B (2)) | C (Se for escolido C (3))
     * 
     * @example
     * <caption>Exemplo de uso - Gera a seleção acima ⇧</caption>
     * InputRaw('Mensagem', ['A', 'B', 'C']).then(r => {
     * 
     *  //SEU CODIGO -> r representa o retorno
     * 
     * })
    */
    InputRaw: async (mensagem, escolhas) => {

        return new Promise(async (resolve) => {

            await inquirer.prompt([{

                type: 'rawlist',
                name: 'a',
                message: mensagem,
                choices: escolhas

            }])
            .then(escolha => {

                resolve(escolha.a)
                
            })
            .catch(error => {
                if (error.isTtyError) {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Não foi possivel mostrar a seleção no console'}, 
                                            {tag: 'Onde', print: 'InputRaw('+mensagem+', '+JSON.stringify(escolhas)+')'}])

                }
                else {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Deu muito erro'}, 
                                            {tag: 'Onde', print: 'InputRaw('+mensagem+', '+JSON.stringify(escolhas)+')'},
                                            {tag: 'Out', print: error}])
                    
                }
            });

        })

    },

    /**
     * Pega um input do tipo rawlist de seleção do console (seleção é feita pelas 'keys' da opções, enter da ok)
     * 
     * @returns {Promise<String>} Retona uma promessa com a escolha do usuario
     * 
     * @param {String} mensagem - Mensagem que ira aparecer no console
     * @param {Array<{key: 'a', value: 'A'}>} escolhas - Opções para selecionar no console, key DEVE ser uma letra apenas
     * 
     * @example 
     * <caption>Exemplo no console - Sem as cores, pois não podem ser colocadas na Documentação</caption>
     * ? Mensagem (abcH) 
     * 
     * @example
     * <caption>Exemplo no console (se for escolido H) - Aqui pode ser usado as 'setinhas', a key ou o valor para seleção - Sem as cores, pois não podem ser colocadas na Documentação</caption>
     * ? Mensagem (abcH) 
     *   a) A
     *   b) B
     *   c) C
     *   h) Help, list all options
     *   Answer: A
     * 
     * @example
     * <caption>Exemplo de retono </caption>
     * A (Se for escolido a) | B (Se for escolido b) | C (Se for escolido c)
     * 
     * @example
     * <caption>Exemplo de uso - Gera a seleção acima ⇧</caption>
     * InputExpand('Mensagem', [{key: 'a', value: 'A'}, 
     *                          {key: 'b', value: 'B'},
     *                          {key: 'c', value: 'C'}])
     * .then(r => {
     *   
     *      //SEU CODIGO -> r representa o retorno
     *
     *  })
    */
    InputExpand: async (mensagem, escolhas) => {

        return new Promise(async (resolve) => {

            await inquirer.prompt([{

                type: 'expand',
                name: 'a',
                message: mensagem,
                choices: escolhas

            }])
            .then(escolha => {

                resolve(escolha.a)
                
            })
            .catch(error => {
                if (error.isTtyError) {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Não foi possivel mostrar a seleção no console'}, 
                                            {tag: 'Onde', print: 'InputExpand('+mensagem+', '+JSON.stringify(escolhas)+')'}])

                }
                else {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Deu muito erro'}, 
                                            {tag: 'Onde', print: 'InputExpand('+mensagem+', '+JSON.stringify(escolhas)+')'},
                                            {tag: 'Out', print: error}])
                    
                }
            });

        })

    },

    /**
     * Pega um input do tipo chackbox de seleção do console (seleção é feita pelas setinhas, espaço seleciona, a seleciona todas, i inverte a seleção, enter da ok)
     * 
     * @returns {Promise<Array<String>>} Retona uma promessa com a escolha do usuario
     * 
     * @param {String} mensagem - Mensagem que ira aparecer no console
     * @param {Array<String>} escolhas - Opções para selecionar no console
     * 
     * @example
     * <caption>Exemplo no console - Sem as cores, pois não podem ser colocadas na Documentação</caption>
     * ? Mensagem (Press <space> to select, <a> to toggle all, <i> to invert selection)
     * ❯◯ A
     *  ◯ B
     *  ◯ C
     * 
     * @example
     * <caption>Exemplo no console - Com seleção - Sem as cores, pois não podem ser colocadas na Documentação</caption>
     * ? Mensagem 
     * ❯◉ A
     *  ◯ B
     *  ◯ C
     * 
     * @example
     * <caption>Exemplo de retono </caption>
     * ['A'] (Se for escolido A) | ['B'] (Se for escolido B) | ['C'] (Se for escolido C)
     * ['A', 'B'] (Se for escolido A e B) | ['A', 'C'] (Se for escolido A e C) | ['A', 'B', 'C'] (Se for escolido A, B e C)
     * 
     * @example
     * <caption>Exemplo de uso - Gera a seleção acima ⇧</caption>
     * InputCheck('Mensagem', ['A', 'B', 'C'])
     * .then(r => {
     *   
     *      //SEU CODIGO -> r representa o retorno
     *
     *  })
    */
    InputCheck: async (mensagem, escolhas) => {

        return new Promise(async (resolve) => {

            await inquirer.prompt([{

                type: 'checkbox',
                name: 'a',
                message: mensagem,
                choices: escolhas

            }])
            .then(escolha => {

                resolve(escolha.a)
                
            })
            .catch(error => {
                if (error.isTtyError) {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Não foi possivel mostrar a seleção no console'}, 
                                            {tag: 'Onde', print: 'InputCheck('+mensagem+', '+JSON.stringify(escolhas)+')'}])

                }
                else {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Deu muito erro'}, 
                                            {tag: 'Onde', print: 'InputCheck('+mensagem+', '+JSON.stringify(escolhas)+')'},
                                            {tag: 'Out', print: error}])
                    
                }
            });

        })

    },

    /**
     * Pega um input do tipo password do console
     * 
     * @returns {Promise<String>} Retona uma promessa com o input do usuario
     * 
     * @param {String} mensagem - Mensagem que ira aparecer no console
     * 
     * @example
     * <caption>Exemplo no console - Sem as cores, pois não podem ser colocadas na Documentação</caption>
     * ? Mensagem 
     * 
     * @example
     * <caption>Exemplo no console com senha digita (eae blz?)- Sem as cores, pois não podem ser colocadas na Documentação</caption>
     * ? Mensagem ********
     * 
     * @example
     * <caption>Exemplo de retono</caption>
     * eae blz? (Se for escrito eae blz?)
     * 
     * @example
     * <caption>Exemplo de uso - Gera a seleção acima ⇧</caption>
     * InputPass('Mensagem').then(r => {
     *   
     *      //SEU CODIGO -> r representa o retorno
     *
     *  })
     * 
    */
    InputPass: async (mensagem) => {

        return new Promise(async (resolve) => {

            await inquirer.prompt([{

                type: 'password',
                mask: true,
                name: 'a',
                message: mensagem,

            }])
            .then(escolha => {

                resolve(escolha.a)
                
            })
            .catch(error => {
                if (error.isTtyError) {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Não foi possivel mostrar a seleção no console'}, 
                                             {tag: 'Onde', print: 'InputPass('+mensagem+')'}])

                }
                else {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Deu muito erro'}, 
                                             {tag: 'Onde', print: 'InputPass('+mensagem+')'},
                                             {tag: 'Out', print: error}])
                    
                }
            });

        })

    },

    /**
     * Pega um input do console (String)
     * 
     * @returns {Promise<String>} Retona uma promessa com a input do usuario
     * 
     * @param {String} mensagem - Mensagem que ira aparecer no console
     * 
     * @example
     * <caption>Exemplo no console - Sem as cores, pois não podem ser colocadas na Documentação</caption>
     * ? Mensagem 
     * 
     * @example
     * <caption>Exemplo no console com valor digitado (eae blz?)- Sem as cores, pois não podem ser colocadas na Documentação</caption>
     * ? Mensagem eae blz?
     * 
     * @example
     * <caption>Exemplo de retono</caption>
     * eae blz? (Se for escrito eae blz?)
     * 
     * @example
     * <caption>Exemplo de uso - Gera a seleção acima ⇧</caption>
     * Input('Mensagem').then(r => {
     *   
     *      //SEU CODIGO -> r representa o retorno
     *
     *  })
    */
    Input: async (mensagem) => {

        return new Promise(async (resolve) => {

            await inquirer.prompt([{

                name: 'a',
                message: mensagem,

            }])
            .then(escolha => {

                resolve(escolha.a)
                
            })
            .catch(error => {
                if (error.isTtyError) {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Não foi possivel mostrar a seleção no console'}, 
                                            {tag: 'Onde', print: 'Input('+mensagem+')'}])

                }
                else {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Deu muito erro'}, 
                                            {tag: 'Onde', print: 'Input('+mensagem+')'},
                                            {tag: 'Out', print: error}])
                    
                }
            });

        })

    },

    /**
     * Pega um input de um editor de texto (será aberto no momento) (o input só será gravado se o editor for salvo e fechado)
     * 
     * @returns {Promise<String>} Retona uma promessa com a input do usuario
     * 
     * @param {String} mensagem - Mensagem que ira aparecer no console
     * 
     * @example
     * <caption>Exemplo no console - Sem as cores, pois não podem ser colocadas na Documentação</caption>
     * ? Mensagem Press <enter> to launch your preferred editor.
     * 
     * @example
     * <caption>Exemplo no console com valor digitado (eae blz?)- Sem as cores, pois não podem ser colocadas na Documentação</caption>
     * Mensagem Received
     * 
     * @example
     * <caption>Exemplo de retono</caption>
     * eae blz? (Se for escrito eae blz?)
     * 
     * @example
     * <caption>Exemplo de uso - Gera a seleção acima ⇧</caption>
     * InputEditor('Mensagem').then(r => {
     *   
     *      //SEU CODIGO -> r representa o retorno
     *
     *  })
    */
    InputEditor: async (mensagem) => {

        return new Promise(async (resolve) => {

            await inquirer.prompt([{

                type: 'editor',
                name: 'a',
                message: mensagem,

            }])
            .then(escolha => {

                resolve(escolha.a)
                
            })
            .catch(error => {
                if (error.isTtyError) {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Não foi possivel mostrar a seleção no console'}, 
                                            {tag: 'Onde', print: 'Input('+mensagem+')'}])

                }
                else {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Deu muito erro'}, 
                                            {tag: 'Onde', print: 'Input('+mensagem+')'},
                                            {tag: 'Out', print: error}])
                    
                }
            });

        })

    },

    /**
     * Pega um input de um Y/N no console
     * 
     * @returns {Promise<Boolean>} Retona uma promessa com a input do usuario (Y -> true, N -> false)
     * 
     * @param {String} mensagem - Mensagem que ira aparecer no console
     * 
     * @example
     * <caption>Exemplo no console - Sem as cores, pois não podem ser colocadas na Documentação</caption>
     * ? Mensagem (Y/n)
     * 
     * @example
     * <caption>Exemplo no console com valor digitado (Y)- Sem as cores, pois não podem ser colocadas na Documentação</caption>
     * ? Mensagem Yes
     * 
     * @example
     * <caption>Exemplo de retono</caption>
     * true (Se for escrito Y) | false (Se for escrito N)
     * 
     * @example
     * <caption>Exemplo de uso - Gera a seleção acima ⇧</caption>
     * InputConfirm('Mensagem').then(r => {
     *   
     *      //SEU CODIGO -> r representa o retorno
     *
     *  })
     * 
    */
    InputConfirm: async (mensagem) => {

        return new Promise(async (resolve) => {

            await inquirer.prompt([{

                type: 'confirm',
                name: 'a',
                message: mensagem,

            }])
            .then(escolha => {

                resolve(escolha.a)
                
            })
            .catch(error => {
                if (error.isTtyError) {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Não foi possivel mostrar a seleção no console'}, 
                                            {tag: 'Onde', print: 'InputConfirm('+mensagem+')'}])

                }
                else {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Deu muito erro'}, 
                                            {tag: 'Onde', print: 'InputConfirm('+mensagem+')'},
                                            {tag: 'Out', print: error}])
                    
                }
            });

        })

    },

    /**
     * Pega um input de numeros no console
     * 
     * @returns {Promise<Number>} Retona uma promessa com a input do usuario, se for um numero retorna ele, se não refrona NaN (numeros não inteiros DEVEM usar separador ".")
     * 
     * @param {String} mensagem - Mensagem que ira aparecer no console
     * 
     * @example
     * <caption>Exemplo no console - Sem as cores, pois não podem ser colocadas na Documentação</caption>
     * ? Mensagem
     * 
     * @example
     * <caption>Exemplo no console com valor digitado (5)- Sem as cores, pois não podem ser colocadas na Documentação</caption>
     * ? Mensagem 5
     * 
     * @example
     * <caption>Exemplo de retono</caption>
     * 5 (Se for escrito 5) | 5.5 (Se for escrito 5.5) | NaN (Se for escrito 5,5) | NaN (Se for escrito alo) 
     * 
     * @example
     * <caption>Exemplo de uso - Gera a seleção acima ⇧</caption>
     * InputNumber('Mensagem').then(r => {
     *   
     *      //SEU CODIGO -> r representa o retorno
     *
     *  })
     * 
    */
    InputNumber: async (mensagem) => {

        return new Promise(async (resolve) => {

            await inquirer.prompt([{

                type: 'number',
                name: 'a',
                message: mensagem,

            }])
            .then(escolha => {

                resolve(escolha.a)
                
            })
            .catch(error => {
                if (error.isTtyError) {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Não foi possivel mostrar a seleção no console'}, 
                                            {tag: 'Onde', print: 'InputNumber('+mensagem+')'}])

                }
                else {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Deu muito erro'}, 
                                            {tag: 'Onde', print: 'InputNumber('+mensagem+')'},
                                            {tag: 'Out', print: error}])
                    
                }
            });

        })

    },

    /**
     * Pega um input de seleção em tabela no console
     * 
     * @returns {Promise<Array<String>>} Retona uma promessa com a input do usuario
     * 
     * @param {String} mensagem - Mensagem que ira aparecer no console
     * @param {Array<{name: 'Nome', value: 'Valor'}>} colunas - valores das colunas da tabela
     * @param {Array<{name: 'Nome', value: 'Valor'}>} linhas - valores das linhas da tabela
     * 
     * @example
     * <caption>Exemplo no console - Sem as cores, pois não podem ser colocadas na Documentação</caption>
     * ? Mensagem (Press <space> to select, <Up and Down> to move rows, <Left and Right> to move columns)
     * ┌──────────┬─────────┬─────────┬─────────┐
     * │ 1-3 of 3 │ COLUNA1 │ COLUNA2 │ COLUNA3 │
     * ├──────────┼─────────┼─────────┼─────────┤
     * │ LINHA1   │ [ ◯ ]   │   ◯     │   ◯     │
     * ├──────────┼─────────┼─────────┼─────────┤
     * │ LINHA2   │   ◯     │   ◯     │   ◯     │
     * ├──────────┼─────────┼─────────┼─────────┤
     * │ LINHA3   │   ◯     │   ◯     │   ◯     │
     * └──────────┴─────────┴─────────┴─────────┘
     * 
     * @example
     * <caption>Exemplo de retono</caption>
     * [ 'COLUNA1', 'COLUNA1', 'COLUNA1' ] (Se for escolido tudo na coluna1)
     * 
     * @example
     * <caption>Exemplo de uso - Gera a seleção acima ⇧</caption>
     * InputTable('Mensagem', [{name: 'COLUNA1', value: 'COLUNA1'},
     *                         {name: 'COLUNA2', value: 'COLUNA2'},
     *                         {name: 'COLUNA3', value: 'COLUNA2'}], [{name: 'LINHA1', value: 'LINHA1'},
     *                                                                {name: 'LINHA2', value: 'LINHA2'},
     *                                                                {name: 'LINHA3', value: 'LINHA3'}])
     * .then(r => {
     *   
     *      //SEU CODIGO -> r representa o retorno
     *
     *  })
    */
    InputTable: async (mensagem, colunas, linhas) => {

        return new Promise(async (resolve) => {

            await inquirer.prompt([{

                type: 'table',
                name: 'a',
                message: mensagem,
                columns: colunas,
                rows: linhas

            }])
            .then(escolha => {

                resolve(escolha.a)
                
            })
            .catch(error => {
                if (error.isTtyError) {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Não foi possivel mostrar a seleção no console'}, 
                                            {tag: 'Onde', print: 'InputTable('+mensagem+')'}])

                }
                else {

                    emfc.PrintError("EMFC", [{tag: 'Erro', print: 'Deu muito erro'}, 
                                            {tag: 'Onde', print: 'InputTable('+mensagem+')'},
                                            {tag: 'Out', print: error}])
                    
                }
            });

        })

    },

    /**
     * Verifica se os parametros do metodo estao certos (Esse metodo é gambiara e instavel, então cuidado ao usar)
     * 
     * @returns {Boolean} Retorna true quando todos estao certos, false quando algum esta errado
     * (Printa no console o que esta errado e porque)
     * 
     * @param {Array<{param: 'NomeParametro', valor: Parametro}>} Params - Diz os parametros do metodo
     * @param {Array<'string', true, {a:'adsa', b:8}>} Ex - 1 possvel exemplo de parametro correto
     * 
    */
    VerifyParams: (Params, Ex) => {

        try {

            let r = {}

            for (p in Params) {

                if (typeof(Params[p].valor) == typeof(Ex[p])) {

                    if (typeof(Ex[p]) == 'object') {

                        try {
                        
                            VerifyObj(Params[p], Ex[p])
                            continue

                        }
                        catch (e) {return false}

                    }

                }
                else {

                    r.param = Params[p].param
                    r.valor = JSON.stringify(Params[p].valor)
                    r.tipoN = typeof(Ex[p])

                    throw new ErroParametros(r.param, r.valor, typeof(Params[p].valor), r.tipoN)
                }

            }

            return true

        }
        catch (e) {return false}

        //return true

    }

}

let VerifyObj = (Param, Ex) => {

    // console.log(JSON.stringify(Param.valor))
    // console.log(JSON.stringify(Ex))

    try {

        let b = true

        let r = {}

        for (e in Param.valor) {

            // console.log(Param)
            // console.log(e)
            // console.log(Param.valor[e])

            if (typeof(Param.valor[e]) == 'object' && !Array.isArray(Param.valor[e])) {

                Object.keys(Param.valor[e]).forEach((x) => {

                    if (typeof(Param.valor[e][x]) == 'object') {

                        let P2 = {

                            param: Param.param,
                            valor: Param.valor[e][x]

                        }

                        if (!VerifyObj(P2, Ex[e][x])) {b = false; return false}

                    }
                    else {

                        // console.log(Ex)
                        // console.log(Ex[e])
                        // console.log(e)
                        // console.log(x)

                        if (Ex[e] == undefined) {e = 0}

                        if (typeof(Param.valor[e][x]) != typeof(Ex[e][x])) {

                            r.param = Param.param
                            r.valor = JSON.stringify(Param.valor[e][x])
                            r.prop = x
                            r.tipoN = typeof(Ex[e][x])

                            // emfc.PrintError("EMF", [{tag: 'Error', print: 'Propriedade de Parametro com erro'},
                            //                         {tag: 'Parametro', print: r.param},
                            //                         {tag: 'Propriedade', print: r.prop},
                            //                         {tag: 'Valor recebido', print: r.valor + " ("+typeof(Param.valor[e][x])+")"},
                            //                         {tag: 'Tipo necessario', print: r.tipoN}])

                            throw new ErroParametrosObj(r.param, r.prop, r.valor, typeof(Param.valor[e][x]), r.tipoN)

                        }

                    }

                }) 

            }
            else if (typeof(Param.valor[e]) == 'object' && Array.isArray(Param.valor[e])) {

                for (eo in Ex[e]) {

                    //console.log(Ex[eo])

                    if (typeof(Ex[eo][x]) == 'object') {

                        let P2 = {

                            param: Param.param,
                            valor: Param.valor[e][x]

                        }

                        if (!VerifyObj(P2, Ex[e][x])) {b = false; return false}

                    }
                    else {

                        if (Ex[e] == undefined) {e = 0}

                        if (typeof(Param.valor[e][x]) != typeof(Ex[e][x])) {

                            r.param = Param.param
                            r.valor = JSON.stringify(Param.valor[e][x])
                            r.prop = x
                            r.tipoN = typeof(Ex[e][x])

                            // emfc.PrintError("EMF", [{tag: 'Error', print: 'Parametro com erro'},
                            //                         {tag: 'Parametro', print: r.param},
                            //                         {tag: 'Propriedade', print: r.prop},
                            //                         {tag: 'Valor recebido', print: r.valor + " ("+typeof(Param.valor[e][x])+")"},
                            //                         {tag: 'Tipo necessario', print: r.tipoN}])

                            throw new ErroParametrosObj(r.param, r.prop, r.valor, typeof(Param.valor[e][x]), r.tipoN)

                            // b = false
                            // return false

                        }

                    }

                }   

            }
            else if (typeof(Param.valor) == 'object' && !Array.isArray(Param.valor)) {

                Object.keys(Param.valor).forEach((x) => {

                    if (typeof(Param.valor[x]) == 'object') {

                        let P2 = {

                            param: Param.param,
                            valor: Param.valor[x]

                        }

                        if (!VerifyObj(P2, Ex[e][x])) {b = false; return false}

                    }
                    else {

                        if (Ex[e] == undefined) {e = 0}

                        if (typeof(Param.valor[x]) != typeof(Ex[e][x])) {

                            r.param = Param.param
                            r.valor = JSON.stringify(Param.valor[x])
                            r.prop = x
                            r.tipoN = typeof(Ex[e][x])

                            // emfc.PrintError("EMF", [{tag: 'Error', print: 'Propriedade de Parametro com erro'},
                            //                         {tag: 'Parametro', print: r.param},
                            //                         {tag: 'Propriedade', print: r.prop},
                            //                         {tag: 'Valor recebido', print: r.valor + " ("+typeof(Param.valor[e][x])+")"},
                            //                         {tag: 'Tipo necessario', print: r.tipoN}])

                            throw new ErroParametrosObj(r.param, r.prop, r.valor, typeof(Param.valor[e][x]), r.tipoN)

                            // b = false
                            // return false

                        }

                    }

                }) 

            }
            else if (typeof(Param.valor) == 'object' && Array.isArray(Param.valor)) {

                for (eo in Ex[e]) {

                    //console.log(Ex[eo])

                    if (typeof(Ex[e][eo]) == 'object') {

                        let P2 = {

                            param: Param.param,
                            valor: Param.valor[eo]

                        }

                        if (!VerifyObj(P2, Ex[e][eo])) {b = false; return false}

                    }
                    else {

                        if (Ex[e] == undefined) {e = 0}

                        if (typeof(Param.valor[e]) != typeof(Ex[e][eo])) {

                            // console.log(Param.valor)
                            // console.log(e)
                            // console.log(eo)
                            // console.log(Param.valor[eo])

                            // console.log(Ex[e][eo])

                            r.param = Param.param
                            r.valor = JSON.stringify(Param.valor[e])
                            r.prop = e
                            r.tipoN = typeof(Ex[e][eo])

                            // emfc.PrintError("EMF", [{tag: 'Error', print: 'Parametro com erro'},
                            //                         {tag: 'Parametro', print: r.param},
                            //                         {tag: 'Propriedade', print: r.prop},
                            //                         {tag: 'Valor recebido', print: r.valor + " ("+typeof(Param.valor[e])+")"},
                            //                         {tag: 'Tipo necessario', print: r.tipoN}])

                            throw new ErroParametrosObj(r.param, r.prop, r.valor, typeof(Param.valor[e][x]), r.tipoN)

                            // b = false
                            // return false

                        }

                    }

                }   

            }

            try {

                if (typeof(Ex[e]) == typeof(Param.valor[e])) {}
                else {

                    r.param = Param.param
                    r.valor = JSON.stringify(Param.valor[e])
                    r.tipoN = typeof(Ex[e])

                    // console.log(typeof(Ex[e]))
                    // console.log(undefined)
                    // console.log(typeof(Ex[e]) == undefined)

                    if (typeof(Ex[e]) == 'undefined') {b = true}
                    else {

                        // emfc.PrintError("EMF", [{tag: 'Error', print: 'Parametro com erro'},
                        //                             {tag: 'Parametro', print: r.param},
                        //                             {tag: 'Valor recebido', print: r.valor + " ("+typeof(Param.valor[e])+")"},
                        //                             {tag: 'Tipo necessario', print: r.tipoN}])

                        throw new ErroParametros(r.param, r.valor, typeof(Param.valor[e]), r.tipoN)

                        // b = false
                        // return false

                    }

                }

            }
            catch (e) {

                r.param = Param.param
                r.valor = undefined
                r.tipoN = typeof(Ex[e])

                // emfc.PrintError("EMF", [{tag: 'Error', print: 'Parametro com erro'},
                //                                 {tag: 'Parametro', print: r.param},
                //                                 {tag: 'Valor recebido', print: r.valor + " ("+typeof(undefined)+")"},
                //                                 {tag: 'Tipo necessario', print: r.tipoN}])

                throw new ErroParametros(r.param, r.valor, typeof(undefined), r.tipoN)

                // b = false
                // return false

            }

        }

        return b

        // emfc.PrintError("EMF", [{tag: 'Error', print: 'Propiedade de Parametro com erro'},
        //                         {tag: 'Parametro', print: r.param},
        //                         {tag: 'Propriedade', print: r.propriedade},
        //                         {tag: 'Valor recebido (Parametro)', print: r.valor + " ("+typeof(Params[p].valor[i])+")"},
        //                         {tag: 'Valor recebido (Propriedade)', print: r.vprop + " ("+typeof(r.vprop)+")"},
        //                         {tag: 'Tipo necessario (Parametro)', print: r.tipoN},
        //                         {tag: 'Tipo necessario (Propriedade)', print: r.ptipoN}])

    }
    catch (e) {}

}
/**
 * @class ErroParametros
*/
class ErroParametros extends Error {

	/** 
	 * @param {String} parametro - O parametro com erro
     * @param {*} valor - O valor recebido
     * @param {String} tipoV - Tipo recebido
     * @param {String} tipoN - Tipo necessario
	*/
	constructor(parametro, valor, tipoV, tipoN) {

        emfc.PrintError("EMF", [{tag: 'Error', print: 'Parametro com erro'},
                                {tag: 'Parametro', print: parametro},
                                {tag: 'Valor recebido', print: valor + " ("+tipoV+")"},
                                {tag: 'Tipo necessario', print: tipoN}])

	}

}

/**
 * @class ErroParametrosObj
*/
class ErroParametrosObj extends Error{

    /** 
	 * @param {String} parametro - O parametro com erro
     * @param {String} prop - A propriedade
     * @param {*} valor - O valor recebido
     * @param {String} tipoV - Tipo recebido
     * @param {String} tipoN - Tipo necessario
	*/
	constructor(parametro, prop, valor, tipoV, tipoN) {

        emfc.PrintError("EMF", [{tag: 'Error', print: 'Propriedade de Parametro com erro'},
                                {tag: 'Parametro', print: parametro},
                                {tag: 'Propriedade', print: prop},
                                {tag: 'Valor recebido', print: valor + " ("+tipoV+")"},
                                {tag: 'Tipo necessario', print: tipoN}])

	}

}