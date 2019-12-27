Feature: Login functionality for adactin application

Background:
When user enter application url
And user enter "Prabhuvenkat" as username
And user enter "prabhu9619" as password
Then user verify the username in the homepage
    
@login
Scenario Outline: Successfull login into the adactin application with valid credential
When user enter application url
And user enter "<username>" as username
And user enter "<password>" as password
Then user verify the username in the homepage

Examples:
|username|password|
|anuamu04123|900388183|
|Mahamilky24|hari.9500|
|Mahamilky22|hari.9500|
|Mahamilky33|hari.9500|

@searchhotel1
Scenario: Successfull SearchHotel into the adactin application with valid credential
When user select valid Location
And user select valid Hotels
And user select valid Room Type
And user select valid Number Of Rooms
And user select valid Check In Date
And user select valid Check Out Date
And user select valid Adults per Room
And user select valid Child per Room
Then user verify the SearchHotel in the homepage
When user select radio button
Then user verify the BookingPage in the homepage
When user select valid Full Name
And user select valid Last Name
And user select valid Billing Address
And user select valid Credit Card No
And user select valid Credit Card Type
And user select valid Expiry Month
And user select valid Expiry Year
And user select valid CVV Number
And user select valid Booknow
Then user click login in the conformationpage

@searchhotel2
Scenario: Successfull SearchHotel into the adactin application with valid credential
When user select valid Location
And user select valid Hotels
And user select valid Room Type
And user select valid Number Of Rooms
And user select valid Check In Date
And user select valid Check Out Date
And user select valid Adults per Room
And user select valid Child per Room
Then user verify the SearchHotel in the homepage
When user select radio button
Then user verify the BookingPage in the homepage
When user select valid Full Name
And user select valid Last Name
And user select valid Billing Address
And user select valid Credit Card No
And user select valid Credit Card Type
And user select valid Expiry Month
And user select valid Expiry Year
And user select valid CVV Number
And user select valid Booknow
Then user click login in the conformationpage

@searchhotel3
Scenario: Successfull SearchHotel into the adactin application with valid credential
When user select valid Location
And user select valid Hotels
And user select valid Room Type
And user select valid Number Of Rooms
And user select valid Check In Date
And user select valid Check Out Date
And user select valid Adults per Room
And user select valid Child per Room
Then user verify the SearchHotel in the homepage
When user select radio button
Then user verify the BookingPage in the homepage
When user select valid Full Name
And user select valid Last Name
And user select valid Billing Address
And user select valid Credit Card No
And user select valid Credit Card Type
And user select valid Expiry Month
And user select valid Expiry Year
And user select valid CVV Number
And user select valid Booknow
Then user click login in the conformationpage finally
