class Bank < ActiveHash::Base
  self.data = [
      {id: 1, name: '三菱UFJ銀行'}, {id: 2, name: 'みずほ銀行'}, {id: 3, name: '日本政策金融公庫'}
  ]
end
