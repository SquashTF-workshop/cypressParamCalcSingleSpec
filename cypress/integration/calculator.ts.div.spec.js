describe('CalculatorDiv', () => {
  it('div', () => {
    var a = 10
    var b = 5
    expect(a / b).to.equal(parseInt(Cypress.env('TS_CUF_div_result')))
  })
})
