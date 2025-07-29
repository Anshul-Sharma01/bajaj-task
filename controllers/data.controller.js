import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";



export const fetchDataAfterProcessing = (req, res) => {
    try{
        const { data } = req.body;
        if(!Array.isArray(data)){
            throw new ApiError(400, "Invalid input received, please make sure that you send data array through the body named : data");
        }

        const userId = "anshul_sharma_29042004";
        const email = "anshul5010.be22@chitkarauniversity.edu.in";
        const rollNumber = "2211985010";

        let sum = 0;
        const oddNumbers = [];
        const evenNumbers = [];
        const alphabets = [];
        const specialCharacters = [];

        let processedString = "";

        data.forEach((ele, ind) => {

            if(/^\d+$/.test(ele)){
                const num = parseInt(ele, 10);
                sum += num;
                if(num % 2 == 0){
                    evenNumbers.push(ele);
                }else{
                    oddNumbers.push(ele);
                }
            }else if(isNaN(ele) && ele.match(/^[a-zA-Z]+$/)){
                alphabets.push(ele.toUpperCase());
                processedString += ele;
            }else{
                specialCharacters.push(ele);
            }
        })

        const str = Array.from(processedString).reverse();
        let resultString = "";
        str.forEach((ele, ind) => {
            resultString += ind % 2 == 0 ? ele.toUpperCase() : ele.toLowerCase();
        });
        processedString = resultString;
        return res.status(200).json(
            new ApiResponse(
              200,
              {
                is_success: true,
                user_id: userId,
                email,
                roll_number: rollNumber,
                odd_numbers: oddNumbers,
                even_numbers: evenNumbers,
                alphabets,
                special_characters: specialCharacters,
                sum: String(sum),
                concat_string: processedString,
              },
              "Data processed successfully"
            )
          );
    }catch(err){
        console.error(`Error occurred while fetching data after processing : ${err}`);
        throw new ApiError(400, "Error occurred while fetching the data");
    }
}













