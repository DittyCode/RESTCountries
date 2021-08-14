export const themeSwitch = () => {
	let themeData = document.body.dataset.theme;

	if (themeData === 'light') {
		themeData = 'dark';
		localStorage.setItem('theme', 'dark');
	} else {
		themeData = 'light';
		localStorage.setItem('theme', 'light');
	}
	document.body.dataset.theme = themeData;
};
