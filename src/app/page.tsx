import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Navbar from "./_components/navbar";

export default function Index() {
	const allPosts = getAllPosts();

	const heroPost = allPosts[0];

	const morePosts = allPosts.slice(1);

	return (
		<main>
			<Container>
				<main className="min-h-fit mt-10 md:mt-16 mb-16">
					<div className="container mx-auto lg:px-10 md:px-10 px-0">
						<Intro />
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							author={heroPost.author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
						{morePosts.length > 0 && (
							<MoreStories posts={morePosts} />
						)}
					</div>
				</main>
			</Container>
		</main>
	);
}
