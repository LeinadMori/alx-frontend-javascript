function guardrail(mathFunction) {
    const queue = [];
    try {
      const result = mathFunction();
      queue.push(result);
    } catch (error) {
      queue.push(error.message);
    } finally {
      queue.push('Guardrail was processed');
    }
  
    return queue;
  }
  const exampleMathFunction = () => 1000;
  console.log(guardrail(exampleMathFunction));
  
  const errorMathFunction = () => { throw new Error('Error occurred'); };
  console.log(guardrail(errorMathFunction));  