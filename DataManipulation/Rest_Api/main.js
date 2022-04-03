/*
complete the getCapitalCity function

the function is expected to return a String.
the function accepts a Sttring country as a parameter

API URL:https://jsonmock.hackerrank.com/api/countries?

Given a country name, query the rest API at the URL
where <country> is the parameter passed to the function (https://jsonmock.hackerrank.com/api/countries?name=<country>).  Return the name
of the countrys capital city.

the response will be a json object with the following five fields:
 *page: The current page of the results. (Number)
 *per_page: the maximum number of results returned per page.(Number)
 *total_pages: total number of pages with results. (Number)
 *data: either an empty array or an array with a single object containing the country records.

 ** in the data array each of the countries has the following schema:
    #name- the name of the country (string)
    #capital- the name of the capital city of the country(string)
    #The country schema contains other fields not revlevant for this question

If there are no records for the country name passed to the request in the system, the data array will be empty.
In that case, the function should return -1.
*/

async function getCapitalCity(country) {
    const response = await fetch(`https://jsonmock.hackerrank.com/api/countries?`)












}