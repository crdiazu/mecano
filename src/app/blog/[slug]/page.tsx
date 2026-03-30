import { notFound } from 'next/navigation';
import Image from 'next/image';
import { posts } from '@/lib/blog-posts';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import Reveal from '@/components/client/reveal';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Artículo no encontrado',
    };
  }

  return {
    title: `${post.title} | MECANO SOLUTIONS`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find((img) => img.id === post.image);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-[120px]">
        <article>
            <Reveal>
                <header className="relative py-24 lg:py-40 text-center">
                     {postImage && (
                        <div className="absolute inset-0 z-0">
                           <div className="absolute inset-0 bg-black/60 z-10"></div>
                           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-20"></div>
                            <Image
                                src={postImage.imageUrl}
                                alt={post.title}
                                fill
                                className="object-cover"
                                data-ai-hint={postImage.imageHint}
                                priority
                            />
                        </div>
                    )}
                    <div className="relative z-30 container mx-auto px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex justify-center gap-2 mb-4">
                                {post.tags.map(tag => (
                                    <Badge key={tag} variant="default">{tag}</Badge>
                                ))}
                            </div>
                            <h1 className="font-headline font-extrabold tracking-tight text-4xl lg:text-6xl mb-4 text-white">
                                {post.title}
                            </h1>
                            <p className="text-muted-foreground">{post.date}</p>
                        </div>
                    </div>
                </header>
            </Reveal>
          
            <Reveal>
                <div className="container mx-auto px-6 lg:px-8 py-16">
                    <div
                    className="prose prose-invert prose-lg max-w-4xl mx-auto prose-h2:text-primary prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </Reveal>

        </article>
      </main>
      <Footer />
    </div>
  );
}
