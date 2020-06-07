class Repayment_cycle < ActiveHash::Base
  self.data = [
      {id: 1, name: '毎月', cycle: '1'}, {id: 2, name: '半年に1回', cycle: '6'}, {id: 3, name: '1年に1回', cycle: '12'}
  ]
end
