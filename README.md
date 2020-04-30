# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation
* Database creation
## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
### Association
- has_many :companies, dependent: :destroy

## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|user_id|string|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :debts, dependent: :destroy

## debtsテーブル
|Column|Type|Option|
|------|----|------|
|title|string|null: false|
|bank_id|integer|null: false|
|principal|integer|null: false|
|borrowing_day|date||
|repayment_deadline|date||
|debt_type_id|integer|null: false|
|repayment_start_day|date|null: false|
|number_of_repayment|integer|null: false|
|repayment_first|integer|null: false|
|repayment_second|integer|null: false|
|repayment_cycle_id|integer|null: false|
|interrest_rate|integer|null: false|
|company_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user


## active_hash
- banks
- debt_type
- repayment_cycle

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
