// . Write a JavaScript program which filters out any string which is less than 8 characters. 

words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

const result = words.filter((word) => word.length > 8);

console.log(result);
