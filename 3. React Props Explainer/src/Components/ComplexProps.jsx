function UserProfileCard({user, theme, actions}){
  return(
    <div className={`w-full flex flex-row justify-between mr-4 rounded-md p-4 mb-4 ${theme.backgroundColor}`}>
      <div className="flex flex-row justify-between gap-4">
        <div className={`w-16 h-16 flex items-center justify-center rounded-full text-2xl ${theme.avatarBg}`}>
          {user.avatar}
        </div>
        <div>
          <h4 className={`font-bold ${theme.textColor}`}>
            {user.name}
          </h4>
          <p className={`text-sm ${theme.textColor}`}>
            {user.email}
          </p>
          <div>
            <span className={`inline-block px-2 py-1 text-xs rounded-full ${theme.badgeBg} ${theme.textColor}`}>
              {user.role}
            </span>
            <span className={`inline-block px-2 py-1 text-xs rounded-full ${theme.badgeBg} ${theme.textColor} ml-2`}>
              {user.status}
            </span>
          </div>
          <hr className="border-gray-300 mt-4" />
          <div className={`mt-2 ${theme.textColor}`}>
            {user.stats && <div className="flex flex-row"> {
              Object.entries(user.stats).map(([key, value]) => (
              <div className="flex flex-col  mr-24 font-medium" key={key} >
                <strong className="font-medium">{value}</strong> {key}
              </div>
            ))}
          </div> }
          </div>
          <div className="flex gap-2 mt-4">
            <button className={`w-full px-4 py-2 rounded font-medium ${actions.primary.className}`} onClick={actions.primary.onClick}>
              {actions.primary.label}
            </button>
            <button className={`w-full px-4 py-2 rounded font-medium ${actions.secondary.className}`} onClick={actions.secondary.onClick}>
              {actions.secondary.label}
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default function ComplexProps() {
  const users = [
    {
      user: {
        name: "Pradeep  Anand",
        email: "alice@example.com",
        avatar: "👨🏽‍💼",
        role: "Admin",
        status: "Active",
        stats: {
          posts: 145,
          followers: 2834,
          following: 421,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-300",
        badgeBg: "bg-purple-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => alert("Viewing profile of Pradeep Anand"),
          className: "bg-purple-500 text-white hover:bg-purple-600 transition",
        },
        secondary: {
          label: "Message",
          onClick: () => alert("Messaging Pradeep Anand"),
          className: "bg-gray-200 text-black hover:bg-gray-600 transition",
        }
      }
    },
    {
      user: {
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "👨🏽‍💻",
        role: "Developer",
        status: "Online",
        stats: {
          Projects: 28,
          Commits: 1523,
          Reviews: 89,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-green-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-green-300",
        badgeBg: "bg-green-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => alert("Viewing profile of Bob Smith"),
          className: "bg-green-500 text-white hover:bg-green-600 transition",
        },
        secondary: {
          label: "Collaborate",
          onClick: () => alert("Collaborating with Bob Smith"),
          className: "bg-gray-200 text-black hover:bg-gray-600 transition",
        }
      }
    }
  ]
  return (
    <div className="bg-white rounded-md p-6 mx-4 mt-4 mb-4">
      <h1 className="text-[#252934] font-bold text-3xl">Complex/Nested Props</h1>
      <p className="mt-2 text-[#606068] font-medium">Complex props allow you to pass nested objects and functions, enabling sophisticated component configurations and interactions.</p>
      <h3 className="mt-4 mb-3 font-bold text-[#404550] text-lg">User Profile Card (Nested Users, Theme & Actions)</h3>
      <div className="flex flex-row justify-between rounded">
        {
        users.map((userData, index) => (
          <UserProfileCard key = {index} {...userData}/>
        ))
        }
      </div>
    </div>
  );
}