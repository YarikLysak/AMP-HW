import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;
  const mockCoursesList = [
    {
      id: 2,
      name: `Video Course 2. Name tag`,
      description: `Learn about where you can find course descriptions,what information they include,
      how they work, and details about various components of a course description.`,
      date: new Date(2019, 5, 1)
        .toLocaleDateString()
        .split('/')
        .join('-'),
      length: 115,
      isTopRated: false,
      authors: [{ id: 1, name: '', lastName: '' }]
    },
    {
      id: 1,
      name: `Video Course 1. Name tag`,
      description: `Learn about where you can find course descriptions,what information they include,
    how they work, and details about various components of a course description.`,
      date: new Date(2019, 8, 1)
        .toLocaleDateString()
        .split('/')
        .join('-'),
      length: 110,
      isTopRated: false,
      authors: [{ id: 1, name: '', lastName: '' }]
    },
    {
      id: 3,
      name: `Video Course 3. Name tag`,
      description: `Learn about where you can find course descriptions,what information they include,
    how they work, and details about various components of a course description.`,
      date: new Date(2019, 3, 1)
        .toLocaleDateString()
        .split('/')
        .join('-'),
      length: 110,
      isTopRated: false,
      authors: [{ id: 1, name: '', lastName: '' }]
    }
  ];

  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('compareNumeric should be called', () => {
    const compareSpy = spyOn(pipe, 'compareNumeric');
    pipe.transform(mockCoursesList, 'date', 'new');
    expect(compareSpy).toHaveBeenCalled();
  });
});
