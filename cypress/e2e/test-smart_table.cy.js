import SmartTable from "../pages/SmartTable";

describe("Forms", () => {
  const smartTable = new SmartTable()
  beforeEach(()=>{
    smartTable.navigate()
  })


  it("create new user", () => {
    smartTable.clickAddNewUserButton()
    smartTable.fillId(777)
    smartTable.fillFirstName("Bohdan")
    smartTable.fillLastName("Chornyi")
    smartTable.fillUsername("Xameleon")
    smartTable.fillEmail("bogdan7450@gmail.com")
    smartTable.fillAge(27)
    smartTable.clickCheckmark()
    smartTable.isUserExist(1, "Xameleon")
    smartTable.editUser(1).click()
    smartTable.updateUser(999, "John", "Doe", "Sauron",
      "test@gmail.com", 77)
    smartTable.clickCheckmark()
    smartTable.isUserExist(1, "John")
    smartTable.isUserExist(1, "Doe")
    smartTable.isUserExist(1, "Sauron")
    smartTable.isUserExist(1, "test")
    smartTable.isUserExist(1, 77)
  })

})

