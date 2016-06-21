// run code after page load
window.onload = function() {

    // group each component by its type
    dataJSON.components.forEach(componentsByType.add, componentsByType)

    // display all components by type as tables
    for (var type in componentsByType.types) {
        outputTypeHeader(type)
        outputTypeQuantitySubHeader(componentsByType.types[type].length)
        outputTypeTable(componentsByType.types[type])
    }
}

////////////////////////////////////////////////////////////////////////////////

// components structure with helper method
componentsByType = {
    'size' : 0,
    'add' : function(component) {
        if (component.type in this.types) {
            this.types[component.type].push(component)
        }
        else {
            this.size += 1
            this.types[component.type] = [component]
        }
    },
    'types' : {}
}

function outputTypeHeader(type) {
    var header = document.createElement('h2')
    header.textContent = type

    document.body.appendChild(header)
}

function outputTypeQuantitySubHeader(quantity) {
    var header = document.createElement('p')
    header.textContent = "(" + quantity + " components)"

    document.body.appendChild(header)
}

function outputTypeTable(components) {
    var table = document.createElement('table')
    table.innerHTML = "<tr><th>Id</th><th>Name</th><th>" + Object.keys(components[0].g)[0] + "</th></tr>"

    components.forEach(function(component) {
        row = table.insertRow(1)

        cellId   = row.insertCell(0)
        cellName = row.insertCell(1)
        cellPath = row.insertCell(2)

        cellId.textContent = component.id
        cellName.textContent = component.names.visio
        cellPath.textContent = component.g[Object.keys(component.g)[0]]
    })

    document.body.appendChild(table)
}
