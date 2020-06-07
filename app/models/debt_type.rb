class Debt_type < ActiveHash::Base
  self.data = [
      {id: 1, name: '証書借入'}, {id: 2, name: '手形借入'}, {id: 3, name: '社債'}
  ]
end
