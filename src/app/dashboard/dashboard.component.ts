import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import { HttpHeaders } from '@angular/common/http';
import { HttpClient,HttpHeaders, HttpXsrfTokenExtractor } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  

  token:string='';
  // assetList = [];
  assetNames = [];

  constructor(private DataService: DataService,private http: HttpClient, private httpClient: HttpClient) { }

  fetchData(): void{

    const token1 = 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vaW5kaXNobXMucGlhbS5ldTEubWluZHNwaGVyZS5pby90b2tlbl9rZXlzIiwia2lkIjoia2V5LWlkLTMiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiIwZmE0MjBlMjMwOWU0NzcxOGQ4ODg4MGJjZTI4Yzk2OSIsInN1YiI6ImluZGlzaG1zLWRlbW9hcGktdjEuMC4wNzMiLCJzY29wZSI6WyJpYW0tYWN0aW9uLmNsaWVudF9jcmVkZW50aWFscy51c2VyLWltcGVyc29uYXRpb24iLCJtZHNwOmNvcmU6QWRtaW4zcmRQYXJ0eVRlY2hVc2VyIl0sImNsaWVudF9pZCI6ImluZGlzaG1zLWRlbW9hcGktdjEuMC4wNzMiLCJjaWQiOiJpbmRpc2htcy1kZW1vYXBpLXYxLjAuMDczIiwiYXpwIjoiaW5kaXNobXMtZGVtb2FwaS12MS4wLjA3MyIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMiLCJyZXZfc2lnIjoiY2Y4MjNmZDMiLCJpYXQiOjE3MDM1NzUzNTIsImV4cCI6MTcwMzU3NzE1MiwiaXNzIjoiaHR0cHM6Ly9pbmRpc2htcy5waWFtLmV1MS5taW5kc3BoZXJlLmlvL29hdXRoL3Rva2VuIiwiemlkIjoiaW5kaXNobXMiLCJhdWQiOlsiaWFtLWFjdGlvbi5jbGllbnRfY3JlZGVudGlhbHMiLCJpbmRpc2htcy1kZW1vYXBpLXYxLjAuMDczIl0sInRlbiI6ImluZGlzaG1zIiwic2NoZW1hcyI6WyJ1cm46c2llbWVuczptaW5kc3BoZXJlOmlhbTp2MSJdLCJjYXQiOiJjbGllbnQtdG9rZW46djEifQ.HUynd2Rqsr0DmoNHsgIFHsvzZwgK3WS46yDVlZTsudUcrAqHz9vp1q_Z7jOXQeJS03b8Yw2q1GJTfEmtpfdumVjdWhGOteOJP3PprcNxmg5SCg32S0mHugHZ5csQBIf2OkIZ3YRKkre7RfAfaEiBV3RnWE2m4kUWXA3lPReE6jrXkyHBjRoyFMB-i3E3dREcvMGxq1T8lWvVUb9ouoM4KFDKeLRKnAiJRe1S-5Yal5SBgERR248KVNQZKCzM0RUnWVIEqIqmIc_0UG7mjg4zwiE5udi-o-A7l6Og6SaMVIKE2iwRzbYoSCP22z-O_QpdFgKzjNlfW1fhkZUGfGuFwQ';
    sessionStorage.setItem('access_token', token1);
    this.token = token1;

    this.DataService.fetchAsset(this.token).subscribe(
      data => {
        const xsrfToken = data.headers.get('XSRF-TOKEN');
  
        if (xsrfToken) {
          this.token = xsrfToken;
          sessionStorage.setItem('access_token', this.token);
        }
  
        // ... (rest of the code)
      },
      error => {
        console.error(error);
      }
    );
  }



  ngOnInit(): void {

      }

}
