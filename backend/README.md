# URL-Hashing-System

Libraries Used
#mongoose
#express
#shortid
#valid-url


URL shortening helps in maintaing a web address and it overcomes the problem of urls getting ruined while transferring from one file system to other.


How URL-Hashing System Works

> It works by doing abstraction of long URLs in the form of small hashed codes followed by domain name.
> The hashed code are uniquely generated 
> The hashed code uniquely represents the long urls and are stored as a key-value
{ lingURL: shortURL } in the database


   REST Architecture of URL-Hashing-System

endpoints
GET: /:code
POST: /api/url/shorten

a POST request on /api/url/shorten is feeded with long URL for example: "https://www.amazon.in/b?node=1389401031&pf_rd_r=HC2KFQEN61E9FJBC7TEJ&pf_rd_p=8aa5249a-e3c3-4c80-a08f-6b922c8585a4&pd_rd_r=5fbbdc93-f791-4560-9c29-f8e066f6f3e6&pd_rd_w=Rouj3&pd_rd_wg=1BLKG&ref_=pd_gw_unk".
 The code checks for a validity of url and traverses if the shorURL of the same is available or not.
 If available it retreives the short url from database and feeds to the user.
 If not available it makes a new and unique entry of shortURL  with the date and provides a shortURL like this http://localhost:5000/vfjeudkON

//body of a POST request:

{
  "longUrl": "https://www.amazon.in/b?node=1389401031&pf_rd_r=HC2KFQEN61E9FJBC7TEJ&pf_rd_p=8aa5249a-e3c3-4c80-a08f-6b922c8585a4&pd_rd_r=5fbbdc93-f791-4560-9c29-f8e066f6f3e6&pd_rd_w=Rouj3&pd_rd_wg=1BLKG&ref_=pd_gw_unk"

}

//response 

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 389
ETag: W/"185-5odiHystgP9UTbxH7lj6eAqSXkA"
Date: Thu, 20 Jan 2022 10:33:57 GMT
Connection: close

{
  "urlCode": "vfjeudkON",
  "longUrl": "https://www.amazon.in/b?node=1389401031&pf_rd_r=HC2KFQEN61E9FJBC7TEJ&pf_rd_p=8aa5249a-e3c3-4c80-a08f-6b922c8585a4&pd_rd_r=5fbbdc93-f791-4560-9c29-f8e066f6f3e6&pd_rd_w=Rouj3&pd_rd_wg=1BLKG&ref_=pd_gw_unk",
  "shortUrl": "http://localhost:5000/vfjeudkON",
  "date": "Thu Jan 20 2022 16:03:57 GMT+0530 (India Standard Time)",
  "_id": "61e93a95acd4189dd7adf11e",
  "__v": 0
}



GET request on http://localhost:5000/vfjeudkON redirects to  https://www.amazon.in/b?node=1389401031&pf_rd_r=HC2KFQEN61E9FJBC7TEJ&pf_rd_p=8aa5249a-e3c3-4c80-a08f-6b922c8585a4&pd_rd_r=5fbbdc93-f791-4560-9c29-f8e066f6f3e6&pd_rd_w=Rouj3&pd_rd_wg=1BLKG&ref_=pd_gw_unk
 
	