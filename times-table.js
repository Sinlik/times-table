let body = document.querySelector('body')
let table = document.createElement('table')
let dimensionsForm = document.querySelector('#dimensions-form')
let dimensionsInput = dimensionsForm.querySelector('#dimensions')

dimensionsForm.addEventListener('submit', function(e) {
    e.preventDefault()
    let numy = 1
    let rowNum = 0
    let acum = 1
    let dimension = dimensionsInput.value
    console.log(dimension)
    for(let i = 0; i < dimension; i ++)
    {
        let tr = document.createElement('tr')
        table.append(tr)
        tr.id = `row ${rowNum}`
        let columnNum = 1
        for(let j = 0; j < dimension; j ++)
        {
            let td = document.createElement('td')
            tr.append(td)
            td.id = `columnNum ${columnNum}`
            td.textContent = columnNum*acum
            columnNum ++
        }
        rowNum ++
        acum ++
    }
    body.append(table)
})