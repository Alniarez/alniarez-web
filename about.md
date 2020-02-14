---
layout: default
title: About me - Alniarez
description: Hello, I'm Jorge Sierra, aka Alniarez. Learn a bit about me and obtain my contact information on this page.
og: yes
nav-type: sticky blur
---
<section class="container width-limit">
	<h1><i class="fas fa-user"></i> About me</h1>
	<p>I am Jorge Sierra Miranda, I go by the name of Alniarez on the Internet.</p>
	<p>I was born in Gijón, Asturias in 1993. I am a software engineer living in Karlsruhe, Germany.</p>
	<p>I have a big passion for technology, videogames, roleplaying, cosplay, anime, manga and music.</p>
	<div class="boxed toggle transition">
		<div class="animate-opacity toggle-component toggle-trigger pointer full-width center">
			<i class="fas fa-chevron-down large-font right padding"></i>
			<p>Tell me more</p>
		</div>
		<div class="animate-opacity toggle-component hidden padding">
			<span class="toggle-trigger pointer"><i class="fas fa-chevron-up large-font right"></i></span>
			<p>I have always been interested in computers since I was a child. My first programs were some flash games I made in Secondary School.</p>
			<p>I studied a degree in Software engineering at the Universidad de Oviedo. While studying I made a large amount of tiny, and not so tiny projects.</p>
			<p>The day I got my diploma I started working on videogames professionally as a contractor.</p>
			<p>After a short career (over a year) as a videogame developer I moved into developing web apps and chat bots as a freelancer.</p>
			<p>During the cryptocurrency craze I worked on multiple software projects for investors, control groups and other crypto-related people.</p>
			<p>Shortly after I moved to Germany with the intention of challenging myself to learn the language while I work as a software developer.</p>
			<p>On my short professional career I have:</p>
			<ul class="ul">
				<li>participated in more than 20 software projects</li>
				<li>worked for contractors in the 5 continents</li>
				<li>wrote code in 5 different programming languages</li>
				<li>worked in the adult entertainment industry</li>
				<li>drank 0 cups of coffee</li>
			</ul>
		</div>
	</div>	
	<h2><i class="fa fa-envelope fa-fw"></i> Mail me</h2>
	<p><button id="showEmail" class="rounded">Click me</button> to show the email addresses</p>
	<p>For mundane conversations: <a href="#" class="secretMailto" data-secret="ujG.fkxVd%40RLyxkUfS">Hidden :)</a></p>
	<p>For professional inquiries: <a href="#" class="secretMailto" data-secret="uHG.fkSuqHp%40LdyjoSgUSTkuxyyLOb">Hidden :)</a></p>
	<h2><i class="fas fa-comments"></i> Chat with me</h2>
	<div class="row">
		<div class="col center">
			<p><i class="fab fa-discord large-font"></i> Discord: <span>Alniarez#5019</span></p>
		</div>
		<div class="col center">
			<p><i class="fab fa-skype large-font"></i> Skype: <span>jorge.darnier</span> (I prefer Discord over Skype)</p>
		</div>
	</div>
	<h2 id="recruiters"><i class="fa fa-address-card"></i> For recruiters</h2>
    <p>I am not looking for anything but I'm always happy to make new contacts and networking.</p>
	<p>My contact information can be found on this page. Please get in touch if you need something from me.</p>
	<h2>Find me on</h2>
	<div class="row">
		<div class="col center">
			<p><i class="fab fa-twitter-square super-large-font"></i> <a href="https://twitter.com/Alniarez"> Twitter</a></p>
			<p><i class="fab fa-instagram super-large-font"></i> <a href="https://www.instagram.com/alniarez/"> Instagram</a></p>
       		<p><i class="fab fa-facebook-square super-large-font"></i> <a href="https://www.facebook.com/Alniarez/"> Facebook</a></p>
		</div>
		<div class="col center">
			<p><i class="fab fa-linkedin super-large-font"></i> <a href="https://www.linkedin.com/in/jorge-sierra-miranda/"> LinkedIn</a></p>
			<p><i class="fab fa-github super-large-font"></i> <a href="https://github.com/alniarez"> Github</a></p>
		</div>
		<div class="col center">
			<p><i class="fab fa-youtube super-large-font"></i> <a href="https://www.youtube.com/channel/UCapN1clZl8sar00SQ0rafSA/"> YouTube</a></p>
			<p><i class="fab fa-twitch super-large-font"></i> <a href="https://www.twitch.tv/mitetis/"> Twitch</a></p>
			<p><i class="fab fa-steam-square super-large-font"></i> <a href="https://steamcommunity.com/id/Alniarez/"> Steam</a></p>
		</div>
	</div>
</section>
<!-- Extra scrips -->
<script>
	setActiveMenuItem("#nav-about")
	setTheme("light-theme")
	$("#showEmail").click(function() {
		$(this).parent().remove()
		showSecretEmail()
	})
</script>
