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
    smartTable.isUserExist("Xameleon")
    smartTable.editFirstUserButton.click()
    smartTable.updateUser(999, "John", "Doe", "Sauron",
      "test@gmail.com", 77)
    smartTable.clickCheckmark()
    smartTable.isUserExist("John")
    smartTable.isUserExist("Doe")
    smartTable.isUserExist("Sauron")
    smartTable.isUserExist("test")
    smartTable.isUserExist(77)
  })

})
