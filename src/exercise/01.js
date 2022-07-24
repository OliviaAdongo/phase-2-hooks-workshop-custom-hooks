import { useEffect } from "react";

export function useDocumentTitle(){
  useEffect(() => {
    document.title = "Irumi";
  }, []);
}

export default function Home(){
  useDocumentTitle();

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        To see the title change in the browser tab, click the 'Open in new tab'
        link above
      </p>
    </div>
  )
}


//TASKS  

/* ✅ create a new function called useDocumentTitle */
/* 👀 export function useDocumentTitle() {} */
/* 
    ✅ move the useEffect code into your useDocumentTitle function
   then, call the useDocumentTitle hook in your component
  */
 
