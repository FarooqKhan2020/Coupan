

import { createBrowserRouter} from "react-router-dom";
import App from "./../App"
import HomePage from "../pages/HomePage";
import BrandPage from "../pages/BrandPage";
import CategoryPage from "../pages/CategoryPage";
import StorePage from "../pages/StorePage";
import CategoryCouponPage from "../pages/CategoryCouponPage";
import ContactUsPage from "../pages/ContactUsPage";
import AboutUsPage from "../pages/AboutUsPage.jsx"
import PrivacyPolicy from "../Components/Privacy/Policy.jsx";
import TermsCondition from "../Components/TermsandCondition/TermsCondition.jsx";



const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'',element:<HomePage />
            },
            {
                path: 'brand/:brandName',
                element: <BrandPage/>,
                loader: ({params}) => {
                    return params.brandName;
                }
            },
            {
                path:'category/',
                element: <CategoryPage/>,

                // loader:({params})=>{
                //     return params.categoryName;
                // }
            },

            {
                path: 'store/',
                element: <StorePage />,
                loader: ({ request }) => {
                  const url = new URL(request.url);
                  const category = url.searchParams.get('category'); // Properly define the URL object from request.url
                  const search = url.searchParams.get('search'); // Extract the 'search' parameter from the URL
                  return { search, category }; // Pass 'search' to the component via useLoaderData
                },
              },
            {
                path: 'categorycoupon',  // base path, no parameters in the path
                element: <CategoryCouponPage />,
                loader: ({ request }) => {
                    const url = new URL(request.url);
                    const category = url.searchParams.get('category');
                    const store = url.searchParams.get('store');
                    const search = url.searchParams.get('search');
                    const highlight = url.searchParams.get('highlight');
                    return { category, store, search, highlight}; // pass these to the component as needed
                },
            },
            {
                path: 'contactus/',
                element: <ContactUsPage/>,

            },
            {
                path: 'aboutus/',
                element: <AboutUsPage/>,

            },
            {
                path: 'privacypolicy/',
                element: <PrivacyPolicy/>,

            },
            {
                path: 'termscondition/',
                element: <TermsCondition/>,

            },

        ]
    }
]);

export default router;