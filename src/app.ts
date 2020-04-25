export const ssr = {
  getInitialData: async () => {
    return {
      layout: {
        data: [{ name: 'hello', id: 1 }],
      },
    };
  },
};
