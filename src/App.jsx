import conf from "./conf/conf"
function App() {
  console.log(conf.appwriteBucketId)
  return (
    <>
      <div>This is Blog App with appwrite</div>
    </>
  )
}

export default App
