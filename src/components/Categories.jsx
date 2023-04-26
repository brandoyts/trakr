import React from 'react';
import useAppStore from '../store';

const Categories = () => {
	const categories = useAppStore((state) => state.categories);

	const renderCategories = () => {
		const _categories = [];
		categories.forEach((cat) => _categories.push(cat));

		return _categories.map((cat) => (
			<option key={cat} value={cat}>
				{cat}
			</option>
		));
	};

	return (
		<select name="categories" id="categories" className="border w-full">
			<option value="">Select a category</option>
			{renderCategories()}
		</select>
	);
};

export default Categories;
