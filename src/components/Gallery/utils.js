export const k = {
	big: 1,
	aboveMedium: 1.2,
	medium: 1.4,
	belowMedium: 1.6,
	small: 1.8,
};

export const calculateCoefficient = (width) => {
	if (width >= 860) {
		return k.big;
	}

	if (width < 860 && width >= 705) {
		return k.aboveMedium;
	}

	if (width < 705 && width >= 550) {
		return k.medium;
	}

	if (width < 550 && width >= 435) {
		return k.belowMedium;
	}

	if (width < 435) {
		return k.small;
	}

	return null;
};