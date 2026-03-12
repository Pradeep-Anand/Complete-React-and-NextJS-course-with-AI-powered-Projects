function Container({children, layout='horizontal'}){
  const layoutClass = {
    horizontal: 'flex flex-row flex-wrap gap-2',
    vertical: 'flex flex-col space-y-4',
    grid: 'grid grid-cols-1 md:grid-cols-2 gap-2',
  }
  return(
    <div className={layoutClass[layout]}>
      {children}
    </div>
  )
}

function Card({children, title, color='blue'}){
  const colorClass = {
    blue: 'bg-blue-100 border-l-4 border-blue-500 border-0',
    green: 'bg-green-100 border-l-4 border-green-500 border-0',
    purple: 'bg-purple-100 border-l-4 border-purple-500 border-0',
    red: 'bg-red-100 border-l-4 border-red-500 border-0',
  }
  return (
    <div className={`border rounded-md p-4 mb-2 ${colorClass[color]}`}>
      {
        title && <h3 className="font-bold text-lg mb-2 text-[#141c24]">{title}</h3>
      }
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  )
}

export default function ChildrenProps() {
  return (
    <div className="bg-white rounded-md p-6 mx-4">
      <h1 className="text-[#252934] font-bold text-3xl">Children Props</h1>
      <p className="mt-2 text-[#606068] font-medium">The children prop in React allows you to pass JSX elements or components as children to other components, enabling component composition.</p>
      <h3 className="font-bold text-lg mt-4 mb-4">Card Components with Children:</h3>
      <Container layout="grid">
        <Card title="User Profile" color="blue">
          <p className='mb-2'><strong>Name:</strong> John Doe</p>
          <p className='mb-2'><strong>Email:</strong> john.doe@example.com</p>
          <p className='mb-2'><strong>Role:</strong> Developer</p>
        </Card>
        <Card title="Statistics" color="green">
          <p className='mb-2 flex flex-row justify-between text-gray-700'>Total Users: <strong>1,234</strong></p>
          <p className='mb-2 flex flex-row justify-between text-gray-700'>Active Sessions: <strong>567</strong></p>
          <p className='mb-2 flex flex-row justify-between text-gray-700'>Revenue: <strong> $89,000</strong></p>
        </Card>
        <Card title="Quick Actions" color="purple">
          <button className="mb-2 w-full px-3 py-1 rounded-md bg-purple-500 text-white hover:bg-purple-600/90 transition">Create New</button>
          <button className="mb-2 w-full px-3 py-1 rounded-md bg-gray-500 text-white hover:bg-gray-600/90 transition">View All</button>
        </Card>
        <Card title="Warning" color="red">
          <p>Your trial period ends in 5 days. Please upgrade your account to continue using all features.</p>
        </Card>
      </Container>
    </div>
  );
}