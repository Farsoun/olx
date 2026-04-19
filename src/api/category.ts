export const getCategoryFields = async (categoryId: string) => {
    try {
        const res = await fetch(
            `https://www.olx.com.lb/api/categoryFields?includeChildCategories=true&splitByCategoryIDs=true&flatChoices=true&groupChoicesBySection=true&flat=true`
        );

        const data = await res.json();

        return data?.data?.[categoryId] || [];
    } catch (e) {
        console.log('Category Fields error:', e);
        return [];
    }
};