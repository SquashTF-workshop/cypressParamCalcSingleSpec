describe('CalculatorAdd', () => {
  it('add', () => {
    var a = 5
    var b = 12
    expect(a + b).to.equal(parseInt(Cypress.env('CPG_CUF_add_result')))
  })
})
