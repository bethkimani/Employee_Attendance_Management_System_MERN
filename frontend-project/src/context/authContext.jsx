import React from 'react'
const userContext = React.createContext();
const authContext = ({children}) => {
const [user, setUser] = React.useState(null);

const login = ()=> {

}
const logout = ()=> {
}


  return (
    <userContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </userContext.Provider>
    
  )
}
const useAuth = () => {
  const context = React.useContext(userContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
export default authContext