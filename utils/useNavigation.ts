import { RichText } from 'prismic-reactjs';
import { useState, useEffect } from 'react';

import { getArticlesFromTag } from "../lib/prismicApi"
import { ArticleT } from '../types';


export const useNavigation = () => {
  const [navigationMain, setNavigationMain] = useState<undefined | {name: string, href: string}[]>()
  const [navigationSecond, setNavigationSecond] = useState<undefined | {name: string, href: string}[]>()


  useEffect(() => {
    (async function () {
      const primaryArticles: ArticleT[] = await getArticlesFromTag("menu principal")
      const primary = primaryArticles.map(x => {
        return {
          name: (x.data.navigation_name && x.data.navigation_name.length !== 0) ?  RichText.asText(x.data.navigation_name) :  RichText.asText(x.data.title),
          href: x.uid
        }
      })
      setNavigationMain(primary)
    })();

    (async function () {
      const secondaryArticles: ArticleT[] = await getArticlesFromTag("menu secondaire")
      let secondary = [{name: "Acualités", href: "actualites"}]
      secondaryArticles.forEach(x => {
        secondary.push({
          name: (x.data.navigation_name && x.data.navigation_name.length !== 0) ?  RichText.asText(x.data.navigation_name) :  RichText.asText(x.data.title),
          href: x.uid
        })
         
      })
      setNavigationSecond(secondary)
   })();
    
  }, [])
  
  
  return {navigationMain, navigationSecond}
  
}