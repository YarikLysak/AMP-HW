import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;
  const mockCoursesList = [
    {
      id: 2,
      title: `Video Course 2. Name tag`,
      description: `Learn about where you can find course descriptions,what information they include,
      how they work, and details about various components of a course description.`,
      creationDate: new Date(2019, 5, 1)
        .toLocaleDateString()
        .split('/')
        .join('-'),
      duration: 115,
      authors: '',
      isTopRated: false
    },
    {
      id: 1,
      title: `Video Course 1. Name tag`,
      description: `Learn about where you can find course descriptions,what information they include,
    how they work, and details about various components of a course description.`,
      creationDate: new Date(2019, 8, 1)
        .toLocaleDateString()
        .split('/')
        .join('-'),
      duration: 110,
      authors: '',
      isTopRated: false
    },
    {
      id: 3,
      title: `Video Course 3. Name tag`,
      description: `Learn about where you can find course descriptions,what information they include,
    how they work, and details about various components of a course description.`,
      creationDate: new Date(2019, 3, 1)
        .toLocaleDateString()
        .split('/')
        .join('-'),
      duration: 110,
      authors: '',
      isTopRated: false
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
    pipe.transform(mockCoursesList, 'new');
    expect(compareSpy).toHaveBeenCalled();
  });
});
