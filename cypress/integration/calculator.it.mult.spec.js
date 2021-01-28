describe('CalculatorMult', () => {
  it('mult', () => {
    var a = 2
    var b = 4
    expect(a * b).to.equal(parseInt(Cypress.env('IT_CUF_mult_result')))
  })
})
