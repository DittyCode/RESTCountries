export const themeSwitch = themeData => {
	if (document.body.dataset.theme === 'light') {
		document.body.dataset.theme = 'dark';
		localStorage.setItem('theme', 'dark');
	} else {
		document.body.dataset.theme = 'light';
		localStorage.setItem('theme', 'light');
	}
};
