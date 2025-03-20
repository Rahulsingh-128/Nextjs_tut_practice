"use client";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

export default function NewsArticle() {
  const params = useParams();
  const SearchParams = useSearchParams();
  const articleId = params.articleId;
  const lang = SearchParams.get("lang") || "en";
  return (
    <div>
      <h1>News Article {articleId}</h1>
      <p>Reading in {lang}</p>
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
