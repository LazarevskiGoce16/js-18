class Employee {
  id
  name
  surname
  accountId

  constructor (id, name, usrname, accountId) {
    this.id = id
    this.name = name
    this.usrname = usrname
    this.accountId = accountId
  }

  setId (id) {
    this.id = id
  }
}

class ITEmployee extends Employee {

  role // sysadmin, fe, be, project manager

  constructor(role) {
    super()
    this.role = role
  }

}

const IT1 = new ITEmployee('sysadmin')
IT1.setId(1)

console.log(IT1)


