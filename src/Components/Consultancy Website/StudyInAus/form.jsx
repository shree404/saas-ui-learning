import React from "react";

function AusForm(){
    return(
        <div>
            <div>
                <p>Interested to study <br /> in Australia?</p>
                <div>
                    <p className="text-blue-600 font-bold text-5xl">.</p>
                    <hr className="h-1 w-3 border border-blue-600" />
                </div>
                <p>
                Enter your details below and we’ll <br /> contact you soon.
                </p>
                <div className="h-20 w-60 bg-blue-300">
                    <br />
                    <p>" <span className="text-red-700"> *</span>" indicates required fields</p>
                </div>
            </div>
            <div>
                <form action="">
                    <div>
                    <label htmlFor="name"> First Name  <span className="text-red-700"> *</span> </label> <br />
                    <input type="text"  placeholder="E.g. John"/>
                    </div>
                    <div>
                    <label htmlFor="name"> Last Name  <span className="text-red-700"> *</span> </label> <br />
                    <input type="text"  placeholder="E.g. Smith"/>
                    </div>
                    <div>
                    <label htmlFor="name"> Last Name  <span className="text-red-700"> *</span> </label> <br />
                    <input type="email"  placeholder="E.g. john.smith@email.com"/>
                    </div>
                    <div>
                    <label htmlFor="name"> Mobile  <span className="text-red-700"> *</span> </label> <br />
                    <div>
                    <div className="flex gap-0">
                        <select name="" id="">
                        <option value="+93">Afghanistan - +93</option>
  <option value="+374">Armenia - +374</option>
  <option value="+994">Azerbaijan - +994</option>
  <option value="+973">Bahrain - +973</option>
  <option value="+880">Bangladesh - +880</option>
  <option value="+975">Bhutan - +975</option>
  <option value="+673">Brunei - +673</option>
  <option value="+855">Cambodia - +855</option>
  <option value="+86">China - +86</option>
  <option value="+995">Georgia - +995</option>
  <option value="+91">India - +91</option>
  <option value="+62">Indonesia - +62</option>
  <option value="+98">Iran - +98</option>
  <option value="+964">Iraq - +964</option>
  <option value="+972">Israel - +972</option>
  <option value="+81">Japan - +81</option>
  <option value="+962">Jordan - +962</option>
  <option value="+7">Kazakhstan - +7</option>
  <option value="+965">Kuwait - +965</option>
  <option value="+996">Kyrgyzstan - +996</option>
  <option value="+856">Laos - +856</option>
  <option value="+961">Lebanon - +961</option>
  <option value="+60">Malaysia - +60</option>
  <option value="+960">Maldives - +960</option>
  <option value="+976">Mongolia - +976</option>
  <option value="+95">Myanmar (Burma) - +95</option>
  <option value="+977">Nepal - +977</option>
  <option value="+850">North Korea - +850</option>
  <option value="+968">Oman - +968</option>
  <option value="+92">Pakistan - +92</option>
  <option value="+970">Palestine - +970</option>
  <option value="+63">Philippines - +63</option>
  <option value="+974">Qatar - +974</option>
  <option value="+966">Saudi Arabia - +966</option>
  <option value="+65">Singapore - +65</option>
  <option value="+82">South Korea - +82</option>
  <option value="+94">Sri Lanka - +94</option>
  <option value="+963">Syria - +963</option>
  <option value="+886">Taiwan - +886</option>
  <option value="+992">Tajikistan - +992</option>
  <option value="+66">Thailand - +66</option>
  <option value="+670">Timor-Leste (East Timor) - +670</option>
  <option value="+90">Turkey - +90</option>
  <option value="+993">Turkmenistan - +993</option>
  <option value="+971">United Arab Emirates (UAE) - +971</option>
  <option value="+998">Uzbekistan - +998</option>
  <option value="+84">Vietnam - +84</option>
  <option value="+967">Yemen - +967</option>
  <option value="+213">Algeria - +213</option>
  <option value="+244">Angola - +244</option>
  <option value="+267">Botswana - +267</option>
  <option value="+226">Burkina Faso - +226</option>
  <option value="+257">Burundi - +257</option>
  <option value="+237">Cameroon - +237</option>
  <option value="+238">Cape Verde - +238</option>
  <option value="+236">Central African Republic - +236</option>
  <option value="+235">Chad - +235</option>
  <option value="+269">Comoros - +269</option>
  <option value="+243">Congo, Democratic Republic of the (DR Congo) - +243</option>
  <option value="+242">Congo, Republic of the - +242</option>
  <option value="+253">Djibouti - +253</option>
  <option value="+20">Egypt - +20</option>
  <option value="+240">Equatorial Guinea - +240</option>
  <option value="+291">Eritrea - +291</option>
  <option value="+251">Ethiopia - +251</option>
  <option value="+241">Gabon - +241</option>
  <option value="+220">Gambia - +220</option>
  <option value="+233">Ghana - +233</option>
  <option value="+224">Guinea - +224</option>
  <option value="+245">Guinea-Bissau - +245</option>
  <option value="+254">Kenya - +254</option>
  <option value="+266">Lesotho - +266</option>
  <option value="+231">Liberia - +231</option>
  <option value="+218">Libya - +218</option>
  <option value="+261">Madagascar - +261</option>
  <option value="+265">Malawi - +265</option>
  <option value="+223">Mali - +223</option>
  <option value="+222">Mauritania - +222</option>
  <option value="+230">Mauritius - +230</option>
  <option value="+212">Morocco - +212</option>
  <option value="+258">Mozambique - +258</option>
  <option value="+264">Namibia - +264</option>
  <option value="+227">Niger - +227</option>
  <option value="+234">Nigeria - +234</option>
  <option value="+250">Rwanda - +250</option>
  <option value="+290">Saint Helena - +290</option>
  <option value="+239">São Tomé and Príncipe - +239</option>
  <option value="+221">Senegal - +221</option>
  <option value="+248">Seychelles - +248</option>
  <option value="+232">Sierra Leone - +232</option>
  <option value="+252">Somalia - +252</option>
  <option value="+27">South Africa - +27</option>
  <option value="+211">South Sudan - +211</option>
  <option value="+249">Sudan - +249</option>
  <option value="+268">Eswatini (Swaziland) - +268</option>
  <option value="+255">Tanzania - +255</option>
  <option value="+228">Togo - +228</option>
  <option value="+216">Tunisia - +216</option>
  <option value="+256">Uganda - +256</option>
  <option value="+260">Zambia - +260</option>
  <option value="+263">Zimbabwe - +263</option>
  <option value="+355">Albania - +355</option>
  <option value="+376">Andorra - +376</option>
  <option value="+374">Armenia - +374</option>
  <option value="+43">Austria - +43</option>
  <option value="+994">Azerbaijan - +994</option>
  <option value="+32">Belgium - +32</option>
  <option value="+387">Bosnia and Herzegovina - +387</option>
  <option value="+359">Bulgaria - +359</option>
  <option value="+385">Croatia - +385</option>
  <option value="+357">Cyprus - +357</option>
  <option value="+420">Czech Republic - +420</option>
  <option value="+45">Denmark - +45</option>
  <option value="+372">Estonia - +372</option>
  <option value="+358">Finland - +358</option>
  <option value="+33">France - +33</option>
  <option value="+995">Georgia - +995</option>
  <option value="+49">Germany - +49</option>
  <option value="+30">Greece - +30</option>
  <option value="+36">Hungary - +36</option>
  <option value="+354">Iceland - +354</option>
  <option value="+353">Ireland - +353</option>
  <option value="+39">Italy - +39</option>
  <option value="+377">Monaco - +377</option>
  <option value="+31">Netherlands - +31</option>
  <option value="+47">Norway - +47</option>
  <option value="+48">Poland - +48</option>
  <option value="+351">Portugal - +351</option>
  <option value="+40">Romania - +40</option>
  <option value="+7">Russia - +7</option>
  <option value="+378">San Marino - +378</option>
  <option value="+381">Serbia - +381</option>
  <option value="+421">Slovakia - +421</option>
  <option value="+386">Slovenia - +386</option>
  <option value="+34">Spain - +34</option>
  <option value="+46">Sweden - +46</option>
  <option value="+41">Switzerland - +41</option>
  <option value="+90">Turkey - +90</option>
  <option value="+380">Ukraine - +380</option>
  <option value="+44">United Kingdom (UK) - +44</option>
  <option value="+379">Vatican City (Holy See) - +379</option>
  <option value="+54">Argentina - +54</option>
  <option value="+591">Bolivia - +591</option>
  <option value="+55">Brazil - +55</option>
  <option value="+56">Chile - +56</option>
  <option value="+57">Colombia - +57</option>
  <option value="+593">Ecuador - +593</option>
  <option value="+592">Guyana - +592</option>
  <option value="+595">Paraguay - +595</option>
  <option value="+51">Peru - +51</option>
  <option value="+597">Suriname - +597</option>
  <option value="+598">Uruguay - +598</option>
  <option value="+58">Venezuela - +58</option>
  <option value="+1">Canada - +1</option>
  <option value="+52">Mexico - +52</option>
  <option value="+1">United States (USA) - +1</option>
  <option value="+61">Australia - +61</option>
                        </select>
                    </div>
                    <div><input type=" number"  placeholder="9847234567"/></div>
                    </div>
                    <div>
                        <label htmlFor=""> Current City <span className="text-red-600">*</span></label>
                        <input type="text" placeholder="E.g. Sydney" />
                    </div>
                    <div>
                        <label htmlFor=""> Country of Residence <span className="text-red-600">*</span></label>
                        <select name="" id="">
                        <option value="Afghanistan">Afghanistan</option>
  <option value="Albania">Albania</option>
  <option value="Algeria">Algeria</option>
  <option value="Andorra">Andorra</option>
  <option value="Angola">Angola</option>
  <option value="Antigua and Barbuda">Antigua and Barbuda</option>
  <option value="Argentina">Argentina</option>
  <option value="Armenia">Armenia</option>
  <option value="Australia">Australia</option>
  <option value="Austria">Austria</option>
  <option value="Azerbaijan">Azerbaijan</option>
  <option value="Bahamas">Bahamas</option>
  <option value="Bahrain">Bahrain</option>
  <option value="Bangladesh">Bangladesh</option>
  <option value="Barbados">Barbados</option>
  <option value="Belarus">Belarus</option>
  <option value="Belgium">Belgium</option>
  <option value="Belize">Belize</option>
  <option value="Benin">Benin</option>
  <option value="Bhutan">Bhutan</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
  <option value="Botswana">Botswana</option>
  <option value="Brazil">Brazil</option>
  <option value="Brunei Darussalam">Brunei Darussalam</option>
  <option value="Bulgaria">Bulgaria</option>
  <option value="Burkina Faso">Burkina Faso</option>
  <option value="Burundi">Burundi</option>
  <option value="Cabo Verde">Cabo Verde</option>
  <option value="Cambodia">Cambodia</option>
  <option value="Cameroon">Cameroon</option>
  <option value="Canada">Canada</option>
  <option value="Central African Republic">Central African Republic</option>
  <option value="Chad">Chad</option>
  <option value="Chile">Chile</option>
  <option value="China">China</option>
  <option value="Colombia">Colombia</option>
  <option value="Comoros">Comoros</option>
  <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
  <option value="Congo, Republic of the">Congo, Republic of the</option>
  <option value="Costa Rica">Costa Rica</option>
  <option value="Côte d'Ivoire">Côte d'Ivoire</option>
  <option value="Croatia">Croatia</option>
  <option value="Cuba">Cuba</option>
  <option value="Cyprus">Cyprus</option>
  <option value="Czech Republic">Czech Republic</option>
  <option value="Denmark">Denmark</option>
  <option value="Djibouti">Djibouti</option>
  <option value="Dominica">Dominica</option>
  <option value="Dominican Republic">Dominican Republic</option>
  <option value="Ecuador">Ecuador</option>
  <option value="Egypt">Egypt</option>
  <option value="El Salvador">El Salvador</option>
  <option value="Equatorial Guinea">Equatorial Guinea</option>
  <option value="Eritrea">Eritrea</option>
  <option value="Estonia">Estonia</option>
  <option value="Eswatini">Eswatini</option>
  <option value="Ethiopia">Ethiopia</option>
  <option value="Fiji">Fiji</option>
  <option value="Finland">Finland</option>
  <option value="France">France</option>
  <option value="Gabon">Gabon</option>
  <option value="Gambia">Gambia</option>
  <option value="Georgia">Georgia</option>
  <option value="Germany">Germany</option>
  <option value="Ghana">Ghana</option>
  <option value="Greece">Greece</option>
  <option value="Grenada">Grenada</option>
  <option value="Guatemala">Guatemala</option>
  <option value="Guinea">Guinea</option>
  <option value="Guinea-Bissau">Guinea-Bissau</option>
  <option value="Guyana">Guyana</option>
  <option value="Haiti">Haiti</option>
  <option value="Honduras">Honduras</option>
  <option value="Hungary">Hungary</option>
  <option value="Iceland">Iceland</option>
  <option value="India">India</option>
  <option value="Indonesia">Indonesia</option>
  <option value="Iran">Iran</option>
  <option value="Iraq">Iraq</option>
  <option value="Ireland">Ireland</option>
  <option value="Israel">Israel</option>
  <option value="Italy">Italy</option>
  <option value="Jamaica">Jamaica</option>
  <option value="Japan">Japan</option>
  <option value="Jordan">Jordan</option>
  <option value="Kazakhstan">Kazakhstan</option>
  <option value="Kenya">Kenya</option>
  <option value="Kiribati">Kiribati</option>
  <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
  <option value="Korea, Republic of">Korea, Republic of</option>
  <option value="Kuwait">Kuwait</option>
  <option value="Kyrgyzstan">Kyrgyzstan</option>
  <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
  <option value="Latvia">Latvia</option>
  <option value="Lebanon">Lebanon</option>
  <option value="Lesotho">Lesotho</option>
  <option value="Liberia">Liberia</option>
  <option value="Libya">Libya</option>
  <option value="Liechtenstein">Liechtenstein</option>
  <option value="Lithuania">Lithuania</option>
  <option value="Luxembourg">Luxembourg</option>
  <option value="Madagascar">Madagascar</option>
  <option value="Malawi">Malawi</option>
  <option value="Malaysia">Malaysia</option>
  <option value="Maldives">Maldives</option>
  <option value="Mali">Mali</option>
  <option value="Malta">Malta</option>
  <option value="Marshall Islands">Marshall Islands</option>
  <option value="Mauritania">Mauritania</option>
  <option value="Mauritius">Mauritius</option>
  <option value="Mexico">Mexico</option>
  <option value="Micronesia (Federated States of)">Micronesia (Federated States of)</option>
  <option value="Moldova, Republic of">Moldova, Republic of</option>
  <option value="Monaco">Monaco</option>
  <option value="Mongolia">Mongolia</option>
  <option value="Montenegro">Montenegro</option>
  <option value="Morocco">Morocco</option>
  <option value="Mozambique">Mozambique</option>
  <option value="Myanmar">Myanmar</option>
  <option value="Namibia">Namibia</option>
  <option value="Nauru">Nauru</option>
  <option value="Nepal">Nepal</option>
  <option value="Netherlands">Netherlands</option>
  <option value="New Zealand">New Zealand</option>
  <option value="Nicaragua">Nicaragua</option>
  <option value="Niger">Niger</option>
  <option value="Nigeria">Nigeria</option>
  <option value="North Macedonia">North Macedonia</option>
  <option value="Norway">Norway</option>
  <option value="Oman">Oman</option>
  <option value="Pakistan">Pakistan</option>
  <option value="Palau">Palau</option>
  <option value="Panama">Panama</option>
  <option value="Papua New Guinea">Papua New Guinea</option>
  <option value="Paraguay">Paraguay</option>
  <option value="Peru">Peru</option>
  <option value="Philippines">Philippines</option>
  <option value="Poland">Poland</option>
  <option value="Portugal">Portugal</option>
  <option value="Qatar">Qatar</option>
  <option value="Romania">Romania</option>
  <option value="Russian Federation">Russian Federation</option>
  <option value="Rwanda">Rwanda</option>
  <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
  <option value="Saint Lucia">Saint Lucia</option>
  <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
  <option value="Samoa">Samoa</option>
  <option value="San Marino">San Marino</option>
  <option value="Sao Tome and Principe">Sao Tome and Principe</option>
  <option value="Saudi Arabia">Saudi Arabia</option>
  <option value="Senegal">Senegal</option>
  <option value="Serbia">Serbia</option>
  <option value="Seychelles">Seychelles</option>
  <option value="Sierra Leone">Sierra Leone</option>
  <option value="Singapore">Singapore</option>
  <option value="Slovakia">Slovakia</option>
  <option value="Slovenia">Slovenia</option>
  <option value="Solomon Islands">Solomon Islands</option>
  <option value="Somalia">Somalia</option>
  <option value="South Africa">South Africa</option>
  <option value="South Sudan">South Sudan</option>
  <option value="Spain">Spain</option>
  <option value="Sri Lanka">Sri Lanka</option>
  <option value="Sudan">Sudan</option>
  <option value="Suriname">Suriname</option>
  <option value="Sweden">Sweden</option>
  <option value="Switzerland">Switzerland</option>
  <option value="Syria">Syria</option>
  <option value="Taiwan">Taiwan</option>
  <option value="Tajikistan">Tajikistan</option>
  <option value="Tanzania">Tanzania</option>
  <option value="Thailand">Thailand</option>
  <option value="Timor-Leste">Timor-Leste</option>
  <option value="Togo">Togo</option>
  <option value="Tonga">Tonga</option>
  <option value="Trinidad and Tobago">Trinidad and Tobago</option>
  <option value="Tunisia">Tunisia</option>
  <option value="Turkey">Turkey</option>
  <option value="Turkmenistan">Turkmenistan</option>
  <option value="Tuvalu">Tuvalu</option>
  <option value="Uganda">Uganda</option>
  <option value="Ukraine">Ukraine</option>
  <option value="United Arab Emirates">United Arab Emirates</option>
  <option value="United Kingdom">United Kingdom</option>
  <option value="United States">United States</option>
  <option value="Uruguay">Uruguay</option>
  <option value="Uzbekistan">Uzbekistan</option>
  <option value="Vanuatu">Vanuatu</option>
  <option value="Venezuela">Venezuela</option>
  <option value="Vietnam">Vietnam</option>
  <option value="Yemen">Yemen</option>
  <option value="Zambia">Zambia</option>
  <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AusForm;