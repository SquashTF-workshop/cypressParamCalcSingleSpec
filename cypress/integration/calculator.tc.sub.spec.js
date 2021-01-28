describe('CalculatorSub', () => {
  it('sub', () => {
    var a = 10
    var b = 5
    expect(a - b).to.equal(parseInt(Cypress.env('TC_CUF_sub_result')))
  })
})
