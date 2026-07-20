"use client";
export default function Error({ reset }: { error: Error; reset: () => void }) { return <section className="not-found"><div><span>!</span><h1>Что-то пошло<br/>не по плану.</h1><button className="btn dark" onClick={reset}>Попробовать снова</button></div></section>; }
