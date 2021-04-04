export const getRandomNumber = (min: number, max: number): number => {
	if (!max) {
		return Math.random();
	}
	return Math.floor(Math.random() * (max - min)) + min;
}