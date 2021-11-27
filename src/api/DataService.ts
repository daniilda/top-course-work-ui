import axios from "axios";

export interface IPaginationRequest {
    limit: number;
    offset: number;
}

export interface IPaginationResponse {
    total: number;
}

export interface IRecord {
    day: number;
    mccCode: string;
    averageAmount: number;
}

export interface IGetRecordsResponse {
    groupedTransactions: IRecord[];
    paginationResponse: IPaginationResponse;
}

export interface IGetRecordsRequest {
    pagination: IPaginationRequest;
}

export default class DataService {
    static async getRecords(count: number = 20, offset: number = 0) {
        console.log("Fetch");
        let result = await axios.get<IGetRecordsResponse>(`https://api.top-course-work.dev.daniilda.xyz/v1/common/get/grouped-average/${count}/${offset}/`)
        console.log(result);
        return result;
    }

    static async getRecordsCsv() {

    }

    static async sendFiles(files: any) {
        let upload = files
        console.log()
        let form = new FormData()
        for (let i = 0; i < files.length; i++) {
            form.append("Files", upload[i])
        }

        console.log(files)
        console.log("post");
        let response = await axios.post(`https://api.top-course-work.dev.daniilda.xyz/v1/authentication/authenticate`, {
            username: "user",
            password: "user",
            isExtended: true
        })
        await axios.post(`https://api.top-course-work.dev.daniilda.xyz/v1/common/upload/dataset-bulk/`, form, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${response.data.jwtToken}`
            }
        }).catch(e => console.log(e));
    }

}
