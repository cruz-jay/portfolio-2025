// import PageNav from "../components/PageNav";
// import styles from "./Login.module.css";
// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";

// import hljs from "highlight.js/lib/core";
// import xml from "highlight.js/lib/languages/xml";
// import javascript from "highlight.js/lib/languages/javascript";
// import json from "highlight.js/lib/languages/json";
// import "highlight.js/styles/github.css";

// hljs.registerLanguage("xml", xml);
// hljs.registerLanguage("javascript", javascript);
// hljs.registerLanguage("json", json);

// const Browser_Router = hljs.highlight(
//   `
// function App() {
//   return (
//     <CitiesProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route index element={<HomePage />} />
//           <Route path="product" element={<Product />} />
//           <Route path="pricing" element={<Pricing />} />
//           <Route path="app" element={<AppLayout />}>
//             <Route index element={<Navigate replace to="cities" />} />
//             <Route path="cities" element={<CityList />} />
//             <Route path="cities/:id" element={<City />} />
//             <Route path="countries" element={<CountryList />} />
//             <Route path="form" element={<Form />} />
//           </Route>
//           <Route path="*" element={<NotFound />} />
//           <Route path="login" element={<Login />} />
//         </Routes>
//       </BrowserRouter>
//     </CitiesProvider>
//   );
// }
// `,
//   {
//     language: "javascript",
//   }
// ).value;

// const json_code = hljs.highlight(
//   `

// "dependencies": {
//   "bootstrap": "^5.3.3",
//   "highlight.js": "^11.10.0",
//   "json-server": "^1.0.0-beta.3",
//   "react": "^18.3.1",
//   "react-bootstrap": "^2.10.6",
//   "react-dom": "^18.3.1",
//   "react-hook-form": "^7.53.2",
//   "react-leaflet": "^4.2.1",
//   "react-router-dom": "^6.27.0" }
//   `,
//   {
//     language: "json",
//   }
// ).value;

// function Login() {
//   return (
//     <div className={styles.login}>
//       <PageNav />
//       <div
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           width: "80%",
//           height: "70vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}>
//         <Carousel style={{ width: "100%", height: "100%" }}>
//           <Carousel.Item>
//             <div
//               style={{
//                 padding: "100px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 width: "100%",
//                 height: "100%",
//               }}>
//               <pre
//                 style={{
//                   fontSize: "18px",
//                   margin: 0,
//                 }}
//                 dangerouslySetInnerHTML={{
//                   __html: json_code,
//                 }}></pre>
//             </div>
//             <Carousel.Caption>
//               <h2> Dependencies </h2>
//             </Carousel.Caption>
//           </Carousel.Item>

//           <Carousel.Item>
//             <div
//               style={{
//                 padding: "10px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 width: "90%",
//                 height: "90%",
//               }}>
//               <pre
//                 style={{
//                   fontSize: "18px",
//                   margin: 0,
//                 }}
//                 dangerouslySetInnerHTML={{
//                   __html: Browser_Router,
//                 }}></pre>
//             </div>
//             <Carousel.Caption>
//               <h2> BrowserRoute & Routes </h2>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>
//     </div>
//   );
// }

// export default Login;
