export const themeSwitch = () => {
	if (document.body.dataset.theme === 'light') {
		document.body.dataset.theme = 'dark';
	} else {
		document.body.dataset.theme = 'light';
	}
};
