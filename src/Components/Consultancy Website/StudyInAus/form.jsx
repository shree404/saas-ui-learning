import React from "react";
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';


function AusForm(){
    return(
        <div className="ml-20 mb-20 w-80 bg-slate-100">
            <div>
                <form action="" className="ml-10 mb-10">
                    <div>
                    <label htmlFor="name" className="mt-2 mb-2"> <span className="font-bold text-xl"> First Name </span> <span className="text-red-700 font-bold text-lg"> *</span> </label>  <br />
                    <input type="text" className="mt-2 mb-2"  placeholder="E.g. John"/> 
                    </div>
                    <div>
                    <label htmlFor="name" className="mt-2 mb-2"> <span className="font-bold text-xl"> Last Name </span>  <span className="text-red-700 font-bold text-lg"> *</span> </label> <br /> 
                    <input type="text"  className="mt-2 mb-2" placeholder="E.g. Smith"/> 
                    </div>
                    <div>
                    <label htmlFor="name"className="mt-2 mb-2" > <span className="font-bold text-xl"> Email </span>  <span className="text-red-700 font-bold text-lg"> *</span> </label> <br /> 
                    <input type="email" className="mb-2 mt-2" placeholder="E.g. john.smith@email.com"/> 
                    </div>
                    <div>
                    <label htmlFor="name" className="mt-2 mb-2"> <span className="font-bold text-xl"> Mobile </span>  <span className="text-red-700 font-bold text-lg"> *</span> </label> <br /> 
                    <input list="countrycode" className="mt-2 mb-2" name="countrycode"  placeholder=" +977 9821555325"/>
                        <datalist id= "countrycode">
                        <option value="Afghanistan - +93"/>
                        <option value="Armenia - +374"/>
  <option value="Azerbaijan - +994"/>
  <option value="Bahrain - +973"/>
  <option value="Bangladesh - +880"/>
  <option value="Bhutan - +975"/>
  <option value="Brunei - +673"/>
  <option value="Cambodia - +855"/>
  <option value="China - +86"/>
  <option value="Georgia - +995"/>
  <option value="India - +91"/>
  <option value="Indonesia - +62"/>
  <option value="Iran - +98"/>
  <option value="Iraq - +964"/>
  <option value="Israel - +972"/>
  <option value="Japan - +81"/>
  <option value="Jordan - +962"/>
  <option value="Kazakhstan - +7"/>
  <option value="Kuwait - +965"/>
  <option value="Kyrgyzstan - +996"/>
  <option value="Laos - +856"/>
  <option value="Lebanon - +961"/>
  <option value="Malaysia - +60"/>
  <option value="Maldives - +960"/>
  <option value="Mongolia - +976"/>
  <option value="Myanmar (Burma) - +95"/>
  <option value="Nepal - +977"/>
  <option value="North Korea - +850"/>
  <option value="Oman - +968"/>
  <option value="Pakistan - +92"/>
  <option value="Palestine - +970"/>
  <option value="Philippines - +63"/>
  <option value="Qatar - +974"/>
  <option value="Saudi Arabia - +966"/>
  <option value="Singapore - +65"/>
  <option value="South Korea - +82"/>
  <option value="Sri Lanka - +94"/>
  <option value="Syria - +963"/>
  <option value="Taiwan - +886"/>
  <option value="Tajikistan - +992"/>
  <option value="Thailand - +66"/>
  <option value="Timor-Leste (East Timor) - +670"/>
  <option value="Turkey - +90"/>
  <option value="Turkmenistan - +993"/>
  <option value="United Arab Emirates (UAE) - +971"/>
  <option value="Uzbekistan - +998"/>
  <option value="Vietnam - +84"/>
  <option value="Yemen - +967"/>
  <option value="Albania - +355"/>
  <option value="Andorra - +376"/>
  <option value="Austria - +43"/>
  <option value="Belarus - +375"/>
  <option value="Belgium - +32"/>
  <option value="Bosnia and Herzegovina - +387"/>
  <option value="Bulgaria - +359"/>
  <option value="Croatia - +385"/>
  <option value="Cyprus - +357"/>
  <option value="Czech Republic - +420"/>
  <option value="Denmark - +45"/>
  <option value="Estonia - +372"/>
  <option value="Finland - +358"/>
  <option value="France - +33"/>
  <option value="Germany - +49"/>
  <option value="Greece - +30"/>
  <option value="Hungary - +36"/>
  <option value="Iceland - +354"/>
  <option value="Ireland - +353"/>
  <option value="Italy - +39"/>
  <option value="Kosovo - +383"/>
  <option value="Latvia - +371"/>
  <option value="Liechtenstein - +423"/>
  <option value="Lithuania - +370"/>
  <option value="Luxembourg - +352"/>
  <option value="Malta - +356"/>
  <option value="Moldova - +373"/>
  <option value="Monaco - +377"/>
  <option value="Montenegro - +382"/>
  <option value="Netherlands - +31"/>
  <option value="North Macedonia - +389"/>
  <option value="Norway - +47"/>
  <option value="Poland - +48"/>
  <option value="Portugal - +351"/>
  <option value="Romania - +40"/>
  <option value="Russia - +7"/>
  <option value="San Marino - +378"/>
  <option value="Serbia - +381"/>
  <option value="Slovakia - +421"/>
  <option value="Slovenia - +386"/>
  <option value="Spain - +34"/>
  <option value="Sweden - +46"/>
  <option value="Switzerland - +41"/>
  <option value="Ukraine - +380"/>
  <option value="United Kingdom - +44"/>
  <option value="Vatican City - +379"/>
  <option value="Algeria - +213"/>
  <option value="Angola - +244"/>
  <option value="Benin - +229"/>
  <option value="Botswana - +267"/>
  <option value="Burkina Faso - +226"/>
  <option value="Burundi - +257"/>
  <option value="Cabo Verde - +238"/>
  <option value="Cameroon - +237"/>
  <option value="Central African Republic - +236"/>
  <option value="Chad - +235"/>
  <option value="Comoros - +269"/>
  <option value="Congo, Democratic Republic of the - +243"/>
  <option value="Congo, Republic of the - +242"/>
  <option value="Djibouti - +253"/>
  <option value="Egypt - +20"/>
  <option value="Equatorial Guinea - +240"/>
  <option value="Eritrea - +291"/>
  <option value="Eswatini - +268"/>
  <option value="Ethiopia - +251"/>
  <option value="Gabon - +241"/>
  <option value="Gambia - +220"/>
  <option value="Ghana - +233"/>
  <option value="Guinea - +224"/>
  <option value="Guinea-Bissau - +245"/>
  <option value="Ivory Coast (Côte d'Ivoire) - +225"/>
  <option value="Kenya - +254"/>
  <option value="Lesotho - +266"/>
  <option value="Liberia - +231"/>
  <option value="Libya - +218"/>
  <option value="Madagascar - +261"/>
  <option value="Malawi - +265"/>
  <option value="Mali - +223"/>
  <option value="Mauritania - +222"/>
  <option value="Mauritius - +230"/>
  <option value="Morocco - +212"/>
  <option value="Mozambique - +258"/>
  <option value="Namibia - +264"/>
  <option value="Niger - +227"/>
  <option value="Nigeria - +234"/>
  <option value="Rwanda - +250"/>
  <option value="São Tomé and Príncipe - +239"/>
  <option value="Senegal - +221"/>
  <option value="Seychelles - +248"/>
  <option value="Sierra Leone - +232"/>
  <option value="Somalia - +252"/>
  <option value="South Africa - +27"/>
  <option value="South Sudan - +211"/>
  <option value="Sudan - +249"/>
  <option value="Tanzania - +255"/>
  <option value="Togo - +228"/>
  <option value="Tunisia - +216"/>
  <option value="Uganda - +256"/>
  <option value="Zambia - +260"/>
  <option value="Zimbabwe - +263"/>
  <option value="Argentina - +54"/>
  <option value="Bolivia - +591"/>
  <option value="Brazil - +55"/>
  <option value="Chile - +56"/>
  <option value="Colombia - +57"/>
  <option value="Ecuador - +593"/>
  <option value="Guyana - +592"/>
  <option value="Paraguay - +595"/>
  <option value="Peru - +51"/>
  <option value="Suriname - +597"/>
  <option value="Uruguay - +598"/>
  <option value="Venezuela - +58"/>
  <option value="Antigua and Barbuda - +1"/>
  <option value="Bahamas - +1"/>
  <option value="Barbados - +1"/>
  <option value="Belize - +501"/>
  <option value="Canada - +1"/>
  <option value="Costa Rica - +506"/>
  <option value="Cuba - +53"/>
  <option value="Dominica - +1"/>
  <option value="Dominican Republic - +1"/>
  <option value="El Salvador - +503"/>
  <option value="Grenada - +1"/>
  <option value="Guatemala - +502"/>
  <option value="Haiti - +509"/>
  <option value="Honduras - +504"/>
  <option value="Jamaica - +1"/>
  <option value="Mexico - +52"/>
  <option value="Nicaragua - +505"/>
  <option value="Panama - +507"/>
  <option value="Saint Kitts and Nevis - +1"/>
  <option value="Saint Lucia - +1"/>
  <option value="Saint Vincent and the Grenadines - +1"/>
  <option value="Trinidad and Tobago - +1"/>
  <option value="United States of America - +1"/>
  <option value="Australia - +61"/>
  <option value="Antarctica - +672"/>
                        </datalist>
                    </div>
                    <div>
                    <label htmlFor="name"className="mt-2 mb-2" > <span className="font-bold text-xl"> Current City </span>  <span className="text-red-700 font-bold text-lg"> *</span> </label> <br /> 
                    <input type="text" className="mb-2 mt-2" placeholder="E.g. Kathmandu"/> 
                    </div>
                    <div>
                    <label htmlFor="name" className="mt-2 mb-2"> <span className="font-bold text-xl"> Country of Residence </span>  <span className="text-red-700 font-bold text-lg"> *</span> </label> <br /> 
                    <input list="country" className="mb-2 mt-2" name="country" placeholder="Nepal" />
                        <datalist id= "country">  
                        <option value="Afghanistan"/>
  <option value="Albania"/>
  <option value="Algeria"/>
  <option value="Andorra"/>
  <option value="Angola"/>
  <option value="Antigua and Barbuda"/>
  <option value="Argentina"/>
  <option value="Armenia"/>
  <option value="Australia"/>
  <option value="Austria"/>
  <option value="Azerbaijan"/>
  <option value="Bahamas"/>
  <option value="Bahrain"/>
  <option value="Bangladesh"/>
  <option value="Barbados"/>
  <option value="Belarus"/>
  <option value="Belgium"/>
  <option value="Belize"/>
  <option value="Benin"/>
  <option value="Bhutan"/>
  <option value="Bolivia"/>
  <option value="Bosnia and Herzegovina"/>
  <option value="Botswana"/>
  <option value="Brazil"/>
  <option value="Brunei"/>
  <option value="Bulgaria"/>
  <option value="Burkina Faso"/>
  <option value="Burundi"/>
  <option value="Cabo Verde"/>
  <option value="Cambodia"/>
  <option value="Cameroon"/>
  <option value="Canada"/>
  <option value="Central African Republic"/>
  <option value="Chad"/>
  <option value="Chile"/>
  <option value="China"/>
  <option value="Colombia"/>
  <option value="Comoros"/>
  <option value="Congo (Congo-Brazzaville)"/>
  <option value="Costa Rica"/>
  <option value="Croatia"/>
  <option value="Cuba"/>
  <option value="Cyprus"/>
  <option value="Czechia"/>
  <option value="Denmark"/>
  <option value="Djibouti"/>
  <option value="Dominica"/>
  <option value="Dominican Republic"/>
  <option value="East Timor (Timor-Leste)"/>
  <option value="Ecuador"/>
  <option value="Egypt"/>
  <option value="El Salvador"/>
  <option value="Equatorial Guinea"/>
  <option value="Eritrea"/>
  <option value="Estonia"/>
  <option value="Eswatini"/>
  <option value="Ethiopia"/>
  <option value="Fiji"/>
  <option value="Finland"/>
  <option value="France"/>
  <option value="Gabon"/>
  <option value="Gambia"/>
  <option value="Georgia"/>
  <option value="Germany"/>
  <option value="Ghana"/>
  <option value="Greece"/>
  <option value="Grenada"/>
  <option value="Guatemala"/>
  <option value="Guinea"/>
  <option value="Guinea-Bissau"/>
  <option value="Guyana"/>
  <option value="Haiti"/>
  <option value="Honduras"/>
  <option value="Hungary"/>
  <option value="Iceland"/>
  <option value="India"/>
  <option value="Indonesia"/>
  <option value="Iran"/>
  <option value="Iraq"/>
  <option value="Ireland"/>
  <option value="Israel"/>
  <option value="Italy"/>
  <option value="Ivory Coast"/>
  <option value="Jamaica"/>
  <option value="Japan"/>
  <option value="Jordan"/>
  <option value="Kazakhstan"/>
  <option value="Kenya"/>
  <option value="Kiribati"/>
  <option value="Kosovo"/>
  <option value="Kuwait"/>
  <option value="Kyrgyzstan"/>
  <option value="Laos"/>
  <option value="Latvia"/>
  <option value="Lebanon"/>
  <option value="Lesotho"/>
  <option value="Liberia"/>
  <option value="Libya"/>
  <option value="Liechtenstein"/>
  <option value="Lithuania"/>
  <option value="Luxembourg"/>
  <option value="Madagascar"/>
  <option value="Malawi"/>
  <option value="Malaysia"/>
  <option value="Maldives"/>
  <option value="Mali"/>
  <option value="Malta"/>
  <option value="Marshall Islands"/>
  <option value="Mauritania"/>
  <option value="Mauritius"/>
  <option value="Mexico"/>
  <option value="Micronesia"/>
  <option value="Moldova"/>
  <option value="Monaco"/>
  <option value="Mongolia"/>
  <option value="Montenegro"/>
  <option value="Morocco"/>
  <option value="Mozambique"/>
  <option value="Myanmar (Burma)"/>
  <option value="Namibia"/>
  <option value="Nauru"/>
  <option value="Nepal"/>
  <option value="Netherlands"/>
  <option value="New Zealand"/>
  <option value="Nicaragua"/>
  <option value="Niger"/>
  <option value="Nigeria"/>
  <option value="North Korea"/>
  <option value="North Macedonia"/>
  <option value="Norway"/>
  <option value="Oman"/>
  <option value="Pakistan"/>
  <option value="Palau"/>
  <option value="Palestine"/>
  <option value="Panama"/>
  <option value="Papua New Guinea"/>
  <option value="Paraguay"/>
  <option value="Peru"/>
  <option value="Philippines"/>
  <option value="Poland"/>
  <option value="Portugal"/>
  <option value="Qatar"/>
  <option value="Romania"/>
  <option value="Russia"/>
  <option value="Rwanda"/>
  <option value="Saint Kitts and Nevis"/>
  <option value="Saint Lucia"/>
  <option value="Saint Vincent and the Grenadines"/>
  <option value="Samoa"/>
  <option value="San Marino"/>
  <option value="Sao Tome and Principe"/>
  <option value="Saudi Arabia"/>
  <option value="Senegal"/>
  <option value="Serbia"/>
  <option value="Seychelles"/>
  <option value="Sierra Leone"/>
  <option value="Singapore"/>
  <option value="Slovakia"/>
  <option value="Slovenia"/>
  <option value="Solomon Islands"/>
  <option value="Somalia"/>
  <option value="South Africa"/>
  <option value="South Korea"/>
  <option value="South Sudan"/>
  <option value="Spain"/>
  <option value="Sri Lanka"/>
  <option value="Sudan"/>
  <option value="Suriname"/>
  <option value="Sweden"/>
  <option value="Switzerland"/>
  <option value="Syria"/>
  <option value="Taiwan"/>
  <option value="Tajikistan"/>
  <option value="Tanzania"/>
  <option value="Thailand"/>
  <option value="Timor-Leste"/>
  <option value="Togo"/>
  <option value="Tonga"/>
  <option value="Trinidad and Tobago"/>
  <option value="Tunisia"/>
  <option value="Turkey"/>
  <option value="Turkmenistan"/>
  <option value="Tuvalu"/>
  <option value="Uganda"/>
  <option value="Ukraine"/>
  <option value="United Arab Emirates"/>
  <option value="United Kingdom"/>
  <option value="United States"/>
  <option value="Uruguay"/>
  <option value="Uzbekistan"/>
  <option value="Vanuatu"/>
  <option value="Vatican City"/>
  <option value="Venezuela"/>
  <option value="Vietnam"/>
  <option value="Yemen"/>
  <option value="Zambia"/>
  <option value="Zimbabwe"/>
                        </datalist> 
                        </div>
                        <div>
                    <label htmlFor="name" className="mt-2 mb-2"> <span className="font-bold text-xl"> Last Education</span>  <span className="text-red-700 font-bold text-lg"> *</span> </label> <br /> 
                    <input list="education" className="mb-2 mt-2" name="education" placeholder="12th" />
                        <datalist id= "education">
                        <option value="12th"/>
                        <option value="Bachelor's Degree"/>
                        <option value="Master's Degree"/>
                             </datalist>
                      </div> <br />
                      <div>
                        <input type="checkbox" name="" id="" /><br />
                        <p className="font-bold">I agree to the Expert Education <br /> Terms and Privacy Policy <span className="text-red-500"> *</span></p> <br /><br />
                      </div>
                      <div className="w-20">
                      <button className="inline-flex  w-20 cursor-pointer items-center justify-center  border-2  bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80">
        Submit
      </button>
      </div>
                      </form>  <br />
                    </div>
                    </div>
    )
}

export default AusForm;