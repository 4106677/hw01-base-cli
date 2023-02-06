const path = require('path');

const fs = require('fs');


 const contactsPath = path.resolve('./db/contacts.json');





// TODO: задокументировать каждую функцию
function listContacts() {fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    }
    const contacts = JSON.parse(data)
    console.log(contacts.map(contact => contact.id) )
})}


function getContactById(contactId) {
fs.readFile(contactsPath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }

        console.log(JSON.parse(data).find(contact => contact.id === String(contactId)))
    }
)
}

function removeContact(contactId) {
    fs.readFile(contactsPath, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            }
            const contactsList = JSON.parse(data).filter(contact => contact.id !== String(contactId))

        fs.writeFile(contactsPath, JSON.stringify(contactsList), error => {
            if (err) {
                console.log(err);
            }
        });
        }
    )

}

function addContact(name, email, phone) {
    fs.readFile(contactsPath, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            }
            const contactsList = JSON.parse(data);
        contactsList.push({
            id: contactsList.length+1,
            name,
            email,
            phone
        })

            fs.writeFile(contactsPath, JSON.stringify(contactsList), error => {
                if (err) {
                    console.log(err);
                }
            });
        }
    )
}

module.exports = {
    listContacts,
    getContactById
    removeContact,
    addContact,
}